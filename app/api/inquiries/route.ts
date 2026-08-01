import { env } from "cloudflare:workers";
import { getDb } from "../../../db";
import { inquiries } from "../../../db/schema";

type InquiryPayload = {
  kind?: string;
  name?: string;
  email?: string;
  inquiryType?: string;
  childAge?: string;
  message?: string;
  marketingConsent?: boolean;
  website?: string;
  details?: Record<string, string>;
};

function clean(value: unknown, limit = 4000) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function addToMailerLite(payload: InquiryPayload, email: string, name: string) {
  if (!payload.marketingConsent) return "not_requested";

  const runtime = env as unknown as {
    MAILERLITE_API_TOKEN?: string;
    MAILERLITE_GROUP_ID?: string;
  };
  if (!runtime.MAILERLITE_API_TOKEN) return "pending_connection";

  const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${runtime.MAILERLITE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      fields: { name },
      groups: runtime.MAILERLITE_GROUP_ID ? [runtime.MAILERLITE_GROUP_ID] : undefined,
      status: "active",
    }),
  });

  return response.ok ? "subscribed" : "sync_failed";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as InquiryPayload;
    if (clean(payload.website)) return Response.json({ ok: true }, { status: 201 });

    const kind = clean(payload.kind, 40) || "contact";
    const name = clean(payload.name, 120);
    const email = clean(payload.email, 240).toLowerCase();
    const message = clean(payload.message);

    if (!name || !isEmail(email) || !message) {
      return Response.json(
        { error: "Please complete your name, email, and message." },
        { status: 400 }
      );
    }

    let mailerLiteStatus = "not_requested";
    try {
      mailerLiteStatus = await addToMailerLite(payload, email, name);
    } catch {
      mailerLiteStatus = "sync_failed";
    }

    const db = getDb();
    await db.insert(inquiries).values({
      kind,
      name,
      email,
      inquiryType: clean(payload.inquiryType, 160),
      childAge: clean(payload.childAge, 80),
      message,
      details: JSON.stringify(payload.details ?? {}).slice(0, 12000),
      marketingConsent: Boolean(payload.marketingConsent),
      mailerLiteStatus,
    });

    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json(
      { error: "Your message was not saved. Please email hello@brightspiralliteracy.com." },
      { status: 500 }
    );
  }
}

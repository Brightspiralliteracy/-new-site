import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const inquiries = sqliteTable("inquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  kind: text("kind").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  inquiryType: text("inquiry_type").notNull().default(""),
  childAge: text("child_age").notNull().default(""),
  message: text("message").notNull().default(""),
  details: text("details").notNull().default("{}"),
  marketingConsent: integer("marketing_consent", { mode: "boolean" }).notNull().default(false),
  mailerLiteStatus: text("mailerlite_status").notNull().default("not_requested"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

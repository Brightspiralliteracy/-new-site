import { Footer, Header } from "../page";
import DangerouslyLiterateLab from "./DangerouslyLiterateLab";

export const metadata = {
  title: "The Dangerously Literate Kid Lab | Bright Spiral Literacy",
  description: "Seven mental models for raising a kid who reads deeply, communicates clearly, and thinks for themselves.",
};

export default function DangerouslyLiteratePage() {
  return (
    <>
      <Header />
      <DangerouslyLiterateLab />
      <Footer />
    </>
  );
}

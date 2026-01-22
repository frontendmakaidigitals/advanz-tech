import { NextResponse } from "next/server";
import { Resend } from "resend";
const key = process.env.RESEND_API_KEY;
const resend = new Resend(key);
export async function POST(req: Request) {
  const raw = await req.json();

  const payload = {
    ...raw,
    date: new Date().toISOString().split("T")[0],
  };

  try {
    const res = await resend.emails.send({
      from: "Advanz Tech Website <Advanztech@spok.digital>",
      to: "frontendmakaidigitals@gmail.com",
      subject: "New Enquiery from landing page",
      html: `
        <h3>New Enquiery Lead</h3>
        <p><b>Name:</b> ${raw.name}</p>
        <p><b>Email:</b> ${raw.email}</p>
        <p><b>Phone:</b> ${raw.phone || "N/A"}</p>
        <p><b>Service:</b> ${raw.service || "N/A"}</p>
        <p><b>Visas:</b> ${payload.message || "N/A"}</p>
        <p><b>Date:</b> ${payload.date}</p>
      `,
    });
    console.log(res);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend API error:", error);
    return new NextResponse("Failed to submit form", { status: 500 });
  }
}

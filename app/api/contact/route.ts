import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (body.website_check) return NextResponse.json({ ok: true });
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  if (!name || name.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 250 || message.length < 20 || message.length > 10000) {
    return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
  }
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) return NextResponse.json({ error: "The inquiry form is being set up. Please try again later." }, { status: 503 });
  const clean = (value: unknown) => String(value || "").slice(0, 1000);
  const services = Array.isArray(body.services) ? body.services.map(clean).slice(0, 15).join(", ") : "Not selected";
  const lines = [
    `Name: ${name}`, `Email: ${email}`, `Company: ${clean(body.company)}`, `Phone: ${clean(body.phone)}`,
    `Website: ${clean(body.website)}`, `Services: ${services}`, `Budget: ${clean(body.budget)}`,
    `Timeline: ${clean(body.timeline)}`, "", "Project details:", message
  ];
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `NOVEXA project inquiry from ${name}`, text: lines.join("\n") })
    });
    if (!response.ok) return NextResponse.json({ error: "Your inquiry could not be delivered. Please try again later." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Your inquiry could not be delivered. Please try again later." }, { status: 502 }); }
}

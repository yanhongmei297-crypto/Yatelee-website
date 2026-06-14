import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "phone"] as const;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidPhone(value: string) {
  return /^\+?[0-9\s().-]{7,24}$/.test(value.trim());
}

export async function POST(request: Request) {
  const body = await request.json();

  if (body.website) {
    return NextResponse.json({ ok: false, error: "Spam check failed" }, { status: 400 });
  }

  for (const field of requiredFields) {
    if (!String(body[field] || "").trim()) {
      return NextResponse.json({ ok: false, error: `${field} is required` }, { status: 400 });
    }
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  if (!isValidPhone(body.phone)) {
    return NextResponse.json({ ok: false, error: "Invalid phone" }, { status: 400 });
  }

  // TODO: send inquiry content to Kale.Yan@zhongshanyatelee.com.
  // TODO: store inquiry in database or CRM.
  // TODO: add Turnstile/reCAPTCHA server-side verification before production.
  return NextResponse.json({ ok: true });
}

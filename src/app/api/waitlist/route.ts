import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not set");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const body = await request.json();
    const { name, email, year, department, reason } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const payload = JSON.stringify({ name, email, year, department, reason });

    let res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      redirect: "follow",
    });

    // Apps Script returns a 302 redirect — follow it manually if needed
    if (res.status === 302 || res.status === 301) {
      const location = res.headers.get("location");
      if (location) {
        res = await fetch(location);
      }
    }

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Apps Script returned non-JSON:", text);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 409 });
    }

    return NextResponse.json({ success: true, position: data.position });
  } catch (err) {
    console.error("Waitlist API error:", err instanceof Error ? err.message : err);
    console.error("Full error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

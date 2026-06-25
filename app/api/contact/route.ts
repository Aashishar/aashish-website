import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─────────────────────────────────────────────
//  CONTACT FORM MODEL
// ─────────────────────────────────────────────

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string; // optional
}

interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  // Name
  if (!data.name || data.name.trim().length === 0) {
    errors.name = "Name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (data.name.trim().length > 100) {
    errors.name = "Name must be under 100 characters.";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || data.email.trim().length === 0) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Subject
  if (!data.subject || data.subject.trim().length === 0) {
    errors.subject = "Subject is required.";
  } else if (data.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  } else if (data.subject.trim().length > 200) {
    errors.subject = "Subject must be under 200 characters.";
  }

  // Message
  if (!data.message || data.message.trim().length === 0) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (data.message.trim().length > 5000) {
    errors.message = "Message must be under 5000 characters.";
  }

  // Phone (optional — validate format only if provided)
  if (data.phone && data.phone.trim().length > 0) {
    const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;
    if (!phoneRegex.test(data.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

// ─────────────────────────────────────────────
//  NODEMAILER TRANSPORTER  (Gmail)
// ─────────────────────────────────────────────
//
//  Required environment variables in .env.local:
//
//  GMAIL_USER=your_gmail@gmail.com
//  GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx   ← 16-char App Password (NOT your Gmail password)
//  CONTACT_RECEIVER=inbox_you_want@gmail.com
//
//  How to get an App Password:
//  1. Go to myaccount.google.com → Security
//  2. Enable 2-Step Verification (required)
//  3. Search "App Passwords" → create one → copy the 16-char code

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

// ─────────────────────────────────────────────
//  EMAIL HTML TEMPLATE
// ─────────────────────────────────────────────

function buildEmailHtml(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f7; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 36px 40px; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.3px; }
        .header p { color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 13px; }
        .body { padding: 36px 40px; }
        .field { margin-bottom: 24px; }
        .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #8b5cf6; margin-bottom: 6px; }
        .value { font-size: 15px; color: #1e1e2e; line-height: 1.6; word-break: break-word; }
        .message-box { background: #f8f7ff; border-left: 4px solid #6366f1; border-radius: 0 8px 8px 0; padding: 16px 20px; }
        .divider { border: none; border-top: 1px solid #ececf1; margin: 28px 0; }
        .footer { background: #f8f7ff; padding: 20px 40px; text-align: center; }
        .footer p { font-size: 12px; color: #9ca3af; margin: 0; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>📬 New Contact Message</h1>
          <p>${new Date().toUTCString()}</p>
        </div>
        <div class="body">
          <div class="field">
            <div class="label">From</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}" style="color:#6366f1;text-decoration:none;">${data.email}</a></div>
          </div>
          ${
            data.phone
              ? `<div class="field">
            <div class="label">Phone</div>
            <div class="value">${data.phone}</div>
          </div>`
              : ""
          }
          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${data.subject}</div>
          </div>
          <hr class="divider" />
          <div class="field">
            <div class="label">Message</div>
            <div class="value message-box">${data.message.replace(/\n/g, "<br/>")}</div>
          </div>
        </div>
        <div class="footer">
          <p>Sent via your portfolio contact form</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function buildAutoReplyHtml(name: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f7; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 36px 40px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; }
        .body { padding: 36px 40px; text-align: center; color: #1e1e2e; }
        .body p { font-size: 15px; line-height: 1.7; color: #4b5563; }
        .highlight { color: #6366f1; font-weight: 600; }
        .footer { background: #f8f7ff; padding: 20px 40px; text-align: center; }
        .footer p { font-size: 12px; color: #9ca3af; margin: 0; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>✅ Message Received!</h1>
        </div>
        <div class="body">
          <p>Hi <span class="highlight">${name}</span>,</p>
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible — usually within <strong>24–48 hours</strong>.</p>
          <p>In the meantime, feel free to explore my portfolio.</p>
          <p style="margin-top: 32px; font-size: 13px; color:#9ca3af;">— Aashish</p>
        </div>
        <div class="footer">
          <p>This is an automated reply. Please do not respond to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// ─────────────────────────────────────────────
//  POST HANDLER
// ─────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, phone } = body;

    // 1. Validate
    const { valid, errors } = validateContactForm({ name, email, subject, message, phone });
    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 422 });
    }

    const formData: ContactFormData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      phone: phone?.trim() || undefined,
    };

    const transporter = createTransporter();

    // 2. Send email to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.GMAIL_USER,
      replyTo: formData.email,
      subject: `[Contact] ${formData.subject}`,
      html: buildEmailHtml(formData),
    });

    // 3. Send auto-reply to the visitor
    await transporter.sendMail({
      from: `"Aashish" <${process.env.GMAIL_USER}>`,
      to: formData.email,
      subject: "Thanks for reaching out!",
      html: buildAutoReplyHtml(formData.name),
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// Block all other HTTP methods
export async function GET() {
  return NextResponse.json({ message: "Method not allowed." }, { status: 405 });
}
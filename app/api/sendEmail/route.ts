import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body.formData;
    console.log(name ,email ,subject ,message,"req.body")
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
await transporter.sendMail({
  from: `"${name}" <${email}>`,
  to: process.env.CONTACT_EMAIL,
  subject: `${subject}`,
  text: `
    New message from ${name} <${email}>:
    Subject: ${subject}

    ${message}
  `,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
      <h2 style="color: #6c63ff; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">📩 New Contact Form Message</h2>
      <p><strong>👤 Name:</strong> ${name}</p>
      <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>📝 Subject:</strong> ${subject}</p>
      <hr style="margin: 20px 0;" />
      <p style="white-space: pre-line;"><strong>💬 Message:</strong><br/>${message}</p>
    </div>
  `,
});

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ message: "Failed to send email", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
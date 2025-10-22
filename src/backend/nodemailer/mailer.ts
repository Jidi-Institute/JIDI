// backend/nodemailer/mailer.ts
import nodemailer, { Transporter } from "nodemailer";

interface EmailData {
  email: string;
  subject?: string;
  message?: string;
  fullName?: string;
}

let cachedTransporter: Transporter | null = null;

/**
 * Creates and caches transporter.
 * Ensures the same connection is reused across multiple sends.
 */
export const createTransporter = (): Transporter => {
  if (cachedTransporter) return cachedTransporter;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587", 10),
    secure: process.env.EMAIL_SECURE === "true", // true for 465, false for 587 since hostinger uses 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Verify connection once in development
  if (process.env.NODE_ENV !== "production") {
    transporter
      .verify()
      .then(() => console.log("✅ SMTP connection verified."))
      .catch((err) =>
        console.error("⚠️ SMTP connection failed:", (err as Error).message)
      );
  }

  cachedTransporter = transporter;
  return transporter;
};

/**
 * Send a general email — used for newsletter or other announcements.
 * we will expand on this in the future for modular email types.
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"JIDI Institute" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: data.subject || "New Email Signup from JIDI Institute Website",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #087B66;">New Email Signup</h2>
        <p>A new person has signed up for updates from JIDI Institute:</p>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; font-size: 16px;"><strong>Email:</strong> ${data.email}</p>
        </div>
        ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
        <p style="color: #666; font-size: 14px;">
          This signup was received from the JIDI Institute website.
        </p>
      </div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📨 Newsletter email sent to ${data.email}`);
  } catch (error) {
    console.error("❌ Error sending newsletter email:", (error as Error).message);
    throw error;
  }
};

/**
 * Send a contact form email to the institute admin.
 */
export const sendContactEmail = async (data: EmailData): Promise<void> => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"${data.fullName}" <${data.email}>`,
    to: process.env.EMAIL_USER, // Admin email (JIDI Institute)
    subject: data.subject || `New Contact Form Message from ${data.fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #087B66;">New Contact Form Submission</h2>
        <p>A new message has been received through the JIDI Institute contact form:</p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <div style="margin-bottom: 15px;">
            <strong style="color: #087B66;">Full Name:</strong><br>
            <span style="font-size: 16px;">${data.fullName}</span>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #087B66;">Email:</strong><br>
            <a href="mailto:${data.email}" style="color: #087B66; text-decoration: none;">${data.email}</a>
          </div>

          <div>
            <strong style="color: #087B66;">Message:</strong><br>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 5px; white-space: pre-wrap;">${data.message}</div>
          </div>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <a href="mailto:${data.email}" style="background-color: #087B66; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${data.fullName}</a>
        </div>

        <p style="color: #666; font-size: 14px;">
          This message was sent from the JIDI Institute website contact form.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📨 Contact form email received from ${data.email}`);
  } catch (error) {
    console.error("❌ Error sending contact email:", (error as Error).message);
    throw error;
  }
};

/**
 * Send a confirmation email back to the user after contact form submission.
 */
export const sendConfirmationEmail = async (email: string): Promise<void> => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"JIDI Institute" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to JIDI Institute - Thank You for Signing Up!",
    html: `
      div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #087B66; margin: 0;">Welcome to JIDI Institute</h1>
          <p style="color: #666; font-size: 16px;">Empowering Africa Through Ethical AI</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 30px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #087B66; margin-top: 0;">Thank You for Joining Us!</h2>
          <p>We're excited to have you as part of our community. You'll be among the first to know about:</p>
          <ul style="text-align: left;">
            <li>Upcoming AI education programs and bootcamps</li>
            <li>Research findings and policy developments</li>
            <li>Events and networking opportunities</li>
            <li>Partnerships and collaborations</li>
          </ul>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <p style="font-size: 18px; font-weight: bold; color: #087B66;">
            "Believe" (Twi) - Our logo symbolizes growth.
          </p>
        </div>

        <div style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center;">
          <p style="color: #666; font-size: 14px;">
            JIDI Institute | Burma Camp, Accra, Ghana<br>
            <a href="https://linkedin.com/company/jidi-institute" style="color: #087B66;">Connect with us on LinkedIn</a>
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Confirmation email sent to ${email}`);
  } catch (error) {
    console.error("❌ Error sending confirmation email:", (error as Error).message);
    throw error;
  }
};

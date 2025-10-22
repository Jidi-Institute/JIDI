import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '../../../backend/nodemailer/mailer';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, message } = await request.json();

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Full name, email, and message are all required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Send contact email to JIDI team
    await sendContactEmail({
      fullName,
      email,
      message
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
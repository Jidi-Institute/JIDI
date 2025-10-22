import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, sendConfirmationEmail } from '../../../backend/nodemailer/mailer';

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Send notification email to JIDI team
    await sendEmail({
      email,
      message: message || 'User signed up for updates'
    });

    // Send confirmation email to user (don't fail if this doesn't work)
    try {
      await sendConfirmationEmail(email);
    } catch (confirmationError) {
      console.warn('Confirmation email failed, but signup was successful:', confirmationError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully signed up! Check your email for confirmation.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup. Please try again later.' },
      { status: 500 }
    );
  }
}
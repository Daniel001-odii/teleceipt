import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import WaitlistUser from '@/lib/models/WaitlistUser';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await WaitlistUser.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'You are already on the waitlist!' },
        { status: 409 }
      );
    }

    // Create new waitlist user
    const newUser = new WaitlistUser({
      email: email.toLowerCase(),
      source: 'hero'
    });

    await newUser.save();

    return NextResponse.json(
      { 
        message: 'Successfully joined the waitlist!',
        user: {
          email: newUser.email,
          createdAt: newUser.createdAt,
          status: newUser.status
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Waitlist signup error:', error);
    
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json(
        { error: 'You are already on the waitlist!' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    
    const users = await WaitlistUser.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(
      { 
        count: users.length,
        users: users.map(user => ({
          email: user.email,
          createdAt: user.createdAt,
          status: user.status,
          source: user.source
        }))
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching waitlist users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist users' },
      { status: 500 }
    );
  }
}

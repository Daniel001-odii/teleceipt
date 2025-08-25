import mongoose from 'mongoose';

export interface IWaitlistUser {
  email: string;
  createdAt: Date;
  status: 'pending' | 'approved' | 'rejected';
  source?: string;
}

const waitlistUserSchema = new mongoose.Schema<IWaitlistUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  source: {
    type: String,
    default: 'hero'
  }
});

// Prevent duplicate emails
waitlistUserSchema.index({ email: 1 }, { unique: true });

export default mongoose.models.WaitlistUser || mongoose.model<IWaitlistUser>('WaitlistUser', waitlistUserSchema);

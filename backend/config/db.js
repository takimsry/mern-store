import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    mongoose.set('debug', true);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // 1 means failure, 0 means success
  }
}
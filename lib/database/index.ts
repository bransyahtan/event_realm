import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// const MONGODB_URI =
//   "mongodb+srv://bransyatan:123123123@cluster0.zkj66ji.mongodb.net/";

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "eventrealm",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

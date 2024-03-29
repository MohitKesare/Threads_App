import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("Mongo DB URL not found!");
  if (isConnected) return console.log("Already connected to mongodb");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("connected to MongoDb!");
  } catch (error) {
    console.log(error);
  }
};

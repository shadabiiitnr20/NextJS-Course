import mongoose from "mongoose";

main().catch((err) => console.log(err));

export async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

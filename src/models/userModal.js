import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      require: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please provide a password"],
      unique: true,
    },
    //Common fields in these kinds of models
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;

import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add a Name"] },
    email: {
      type: String,
      required: [true, "Please add a Email"],
      unique: true,
    },
    password: { type: String, required: false },
    googleId: { type: String, required: false },
    id: { type: String },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", userSchema);

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
      name: { type: String, required: true, maxLength: 40 },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      is_admin: { type:Boolean, default:false },
    },
    { timestamps: true }
  );



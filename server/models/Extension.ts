import mongoose from "mongoose";

const ExtensionSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide extension name"] },
    description: {
      type: String,
      required: [true, "Please provide a descriptions"],
    },
    isActive: { type: Boolean, default: false },
    logo: { type: String, required: [true, "Please provide a logo"] },
  },
  { timestamps: true }
);

export default mongoose.model("Extension", ExtensionSchema);

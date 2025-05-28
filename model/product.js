// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    img: { type: String },
    title: { type: String, required: true },
    color: { type: String },
    producer: { type: String },
    price: { type: String },
    createdAt: { type: String },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);

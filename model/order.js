// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
    },
    productTitle: { type: String, required: true },
    customerName: { type: String, required: true },
    quantity: { type: Number, required: true },
    orderDate: { type: String, default: Date.now },
    status: { type: String, default: "pending" },
    totalPrice: { type: String, required: true },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);

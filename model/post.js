// models/Post.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    author: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);

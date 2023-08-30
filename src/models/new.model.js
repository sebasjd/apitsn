import mongoose from "mongoose";

const newSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  }
);

export default mongoose.model("New", newSchema)
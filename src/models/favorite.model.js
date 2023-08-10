import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    favNewId: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }
  }
);

export default mongoose.model("Favorite", favoriteSchema)
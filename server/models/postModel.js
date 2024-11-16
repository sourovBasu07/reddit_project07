import mongoose from "mongoose";

const PostSChema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
    communityId: {
      type: String,
      required: true,
    },
    nameOfUser: {
      type: String,
      required: true,
    },
    communityImageUrl: {
      type: String,
    },
    numberOfComments: {
      type: Number,
      default: 0,
    },
    voteStatus: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const PostMOdel = mongoose.model("Post", PostSChema);
export default PostMOdel;

import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    communityName: {
      type: String,
      required: true,
    },
    numberOfMembers: {
      type: Number,
      default: 1,
    },
    communityType: {
      type: String,
      required: true,
    },
    communityIcon: {
      type: String,
    },
    coverImage: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const CommunityModel = mongoose.model("Community", CommunitySchema);

export default CommunityModel;

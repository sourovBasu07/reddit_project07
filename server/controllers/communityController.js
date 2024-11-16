import CommunityModel from "../models/communityModel.js";

export const getCommunity = async (req, res) => {
  try {
    const community = await CommunityModel.find().exec();

    if (!community) {
      return res.status(400).json({ message: "No community found" });
    }

    res.json(community);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCommunity = async (req, res) => {
  try {
    const { creatorId, communityName, communityType } = req.body;

    if (!creatorId || !communityName || !communityType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const duplicate = await CommunityModel.findOne({ communityName })
      .collation({ locale: "en", strength: 3 })
      .lean()
      .exec();

    if (duplicate) {
      return res.status(409).json({ message: "Community name exists" });
    }

    const community = await CommunityModel.create({
      creatorId,
      communityName,
      communityType,
    });

    if (community) {
      return res
        .status(201)
        .json({ message: `Community ${communityName} created` });
    } else {
      return res
        .status(400)
        .json({ message: "Invalid community data received" });
    }
  } catch (error) {
    return res.status(404).json({ message: "Invalid data received" });
  }
};

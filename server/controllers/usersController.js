import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password").lean();

  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
};

export const createUser = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const duplicateEmail = await UserModel.findOne({ email })
    .collation({ locale: "en", strength: 3 })
    .lean()
    .exec();

  if (duplicateEmail) {
    return res.status(409).json({ message: "Email exists" });
  }

  const duplicateUsername = await UserModel.findOne({ username })
    .collation({ locale: "en", strength: 3 })
    .lean()
    .exec();

  if (duplicateUsername) {
    return res.status(409).json({ message: "Username exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userObject = { username, password: hashedPassword };

  const user = await UserModel.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${username} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
};

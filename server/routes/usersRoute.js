import express from "express";
import { createUser, getAllUsers } from "../controllers/usersController.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser).patch().delete();

export default router;

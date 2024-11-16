import express from "express";
import {
  createCommunity,
  getCommunity,
} from "../controllers/communityController.js";

const router = express.Router();

router.route("/").get(getCommunity).post(createCommunity).patch().delete();

export default router;

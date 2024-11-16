import express from "express";
import { loginUser, logout, refresh } from "../controllers/authController.js";

const router = express.Router();

router.route("/signin").post(loginUser);
router.route("/refresh").get(refresh);
router.route("/logout").post(logout);

export default router;

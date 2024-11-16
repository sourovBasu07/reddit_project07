import express from "express";

const router = express.Router();

router.route("/").get().post().patch().delete();

export default router;

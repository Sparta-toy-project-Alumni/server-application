// routes/goods.js
const express = require("express");
const router = express.Router();
const { Free } = require("../models");
const { Op } = require("sequelize");

router.post("/post", async (req, res) => {
  try {
    const { userId, title, content } = req.body;

    const result = await Free.create({
      userId,
      title,
      content,
    });

    res.status(200).send({
      result,
      ok: true,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      ok: false,
      message: `${err} : 게시글 작성 실패`,
    });
  }
});

router.get("/post", async (req, res) => {
  const freePosts = await Free.findAll({});
  res.status(200).send({
    ok: true,
    freePosts,
  });
});

module.exports = router;

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

router.get("/post/:freeId", async (req, res) => {
  const { freeId } = req.params;
  console.log(freeId);
  const freePost = await Free.findOne({ where: { freeId } });
  console.log(freePost);
  if (freePost == null) {
    res.status(400).send({
      ok: false,
      message: "게시글이 존재하지 않습니다.",
    });
    return;
  }
  res.status(200).send({
    ok: true,
    freePost,
  });
});

router.get("/post/:freeId/view_count", async (req, res) => {
  try {
    const { freeId } = req.params;
    const result = await Free.increment(
      { viewCount: +1 },
      { where: { freeId } }
    );
    console.log(result);
    res.status(200).send({
      ok: true,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      ok: false,
      message: `${err} : 조회수 증가 실패`,
    });
  }
});

router.put("/post/:freeId", async (req, res) => {
  try {
    const { freeId } = req.params;
    const { title, content } = req.body;
    console.log(freeId);
    let post = {};
    if (title) post.title = title;
    if (content) post.content = content;
    await Free.update(post, {
      where: { freeId },
    });

    const newPost = await Free.findOne({ where: { freeId } });
    console.log(newPost);
    if (newPost == null) {
      res.status(400).send({
        ok: false,
        message: "게시글이 존재하지 않습니다.",
      });
      return;
    }
    res.status(200).send({
      ok: true,
      newPost,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      ok: false,
      message: `${err} : 게시글 수정 실패`,
    });
  }
});

router.delete("/post/:freeId", async (req, res) => {
  try {
    const { freeId } = req.params;
    await Free.destroy({
      where: { freeId },
    });

    res.status(200).send({
      ok: true,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      ok: false,
      message: `${err} : 게시글 삭제 실패`,
    });
  }
});
module.exports = router;

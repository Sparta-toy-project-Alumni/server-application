const express = require("express");
const router = express.Router();
const { User } = require("../models");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const existsUsers = await User.findAll({});
  res.status(200).send({
    ok: true,
    existsUsers,
  });
});

router.get("/about", (req, res) => {
  res.send("this is about page");
});

module.exports = router;

const express = require("express");
const Frees = require("./free");
// const Generations = require("./generation");
// const Notices = require("./notice");
// const Studies = require("./study");
const Users = require("./user");

const router = express.Router();

router.use("/free/", Frees);
router.use("/user/", Users);

module.exports = router;

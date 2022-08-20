const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(
  cors({
    origin: "*", // 모든 출처 허용 옵션. true 를 써도 된다.
  })
);

const userRouter = require("./routes/user");
const freeRouter = require("./routes/free");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/user", [userRouter]);
app.use("/free", [freeRouter]);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

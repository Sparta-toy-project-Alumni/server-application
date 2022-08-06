const express = require("express");
const app = express();
const port = 3000;
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

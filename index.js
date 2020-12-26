const express = require("express");
const app = express();
var port = process.env.port || 3000;
var path = require("path");
var fs = require("fs");

var morgan = require("morgan");
var bodyParser = require("body-parser");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(morgan("short"));
app.listen(port, () => {
  console.log("3000");
});

// app.use("/cim", () => {
//   console.log("asd");
// });
app.get("/", (req, res) => {
  res.render("scary");
});
app.get("/the-beginning-is-the-end", (req, res) => {
  res.render("qrcode");
});
app.get("/94fd1a71-b7fb", (req, res) => {
  res.render("level4", { error: 206, status: 700 });
});
app.post("/94fd1a71-b7fb", (req, res) => {
  var readQuiz = fs.readFileSync("data/level1.json", "utf8");
  var jsonContent = JSON.parse(readQuiz);

  if (req.body.answer1.toUpperCase() == "REVOLUTION") {
    res.redirect("/end-is-near");
    // res.render("poem", { error: 100, status: 200 });
  }
  res.render("poem", { error: 700, status: 100 });
});
app.get("/end-is-near", (req, res) => {
  res.render("audio1");
});
app.post("/end-is-near", (req, res) => {
  res.render("audio1");
});
app.get("/end", (req, res) => {
  res.render("level4");
});

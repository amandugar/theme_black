const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("homepage")
})
app.get("/products/geoCreDe", function (req, res) {
  res.render("geocrede")
})
app.get("/products/districtMetrics", function (req, res) {
  res.render("dm")
})

app.get("/products/xChecks", function (req, res) {
  res.render("xchecks")
})

app.get("/aboutUs", function (req, res) {
  res.render("management")
})

app.get("/whatWeDo", function (req, res) {
  res.render("whatWeDo")
})

app.get("/sectors", function (req, res) {
  res.render("sectors")
})

port = process.env.PORT || 3000 || 443;
app.listen(port, function () {
  console.log(`${port}`)
});
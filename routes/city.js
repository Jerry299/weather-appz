const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/map", (req, res) => {
  res.render("map");
});
router.get("/result", (req, res) => {
  let city = req.query.city;

  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37068910d3019fcd4a44b0e539978cec`
    )
    .then((response) => {
      res.render("weather", { data: response.data });
    })
    .catch((err) => {
      res.status(404).render("cityError");
    });
});
router.get("/map-result", (req, res) => {
  res.render("mapsResult");
});

module.exports = router;

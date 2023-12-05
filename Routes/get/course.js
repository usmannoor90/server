const express = require("express");

const router = express.Router();

router.get("/course", (req, res) => {
  res.send({ id: 1, message: "sdfsdfsdf", essage: "sdfdsfsdfsdf" });
});

module.exports = router;

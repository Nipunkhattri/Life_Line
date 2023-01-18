const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

// login authentication

router.post("/login", (req, res) => {
  const username = req.body.username;
  console.log(req.body);
  const password = req.body.password;

  User.findOne({ username: username }, (err, obj) => {
    if (err) {
      console.log(err.message);
    } else {
      bcrypt.compare(password, obj.password, (err, result) => {
        if (err) {
          console.log(err.message);
        }
        if (result) {
          const username = obj.username;
          const token = jwt.sign({ username }, "secretjwtkey", {
            expiresIn: "10m",
          });
          const refreshToken = jwt.sign({ username }, "refreshtokenkey", {
            expiresIn: "7d",
          });
          res.json({
            auth: true,
            token: token,
            refreshToken: refreshToken,
            result: obj,
          });
        } else {
          res.send("failed");
        }
      });
    }
  });
});

module.exports = router;

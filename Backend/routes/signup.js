const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());

router.post(`/signup`, (req, res) => {
  try {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        console.log(err.message);
      } else {
        req.body.password = hash;
        console.log(req.body.password);
        console.log(req.body);
        const user = new User(req.body);
        User.create(user);
      }
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

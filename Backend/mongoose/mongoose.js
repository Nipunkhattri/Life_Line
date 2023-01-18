require("dotenv").config();
const { Db } = require("mongodb");
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://abhishek:Opabhishek%40123@cluster0.bx3mckm.mongodb.net/life-line`,
  {
    useNewUrlParser: true,
  }
);
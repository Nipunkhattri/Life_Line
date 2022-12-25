const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(chalk.red("Invalid email"));
      }
    },
  },
  password: {
    type: String,
    trim: true,
    minLength: 10,
    required: true,
  },
  phNum: {
    type:Number,
  },
  organsDonated:[
    {
        organ:String,
        to:{
            hospitalName:String,
            location:String,
            contactEmail:String,
            phNum:Number,
        },
        timestamp:Number,
    }
  ],
  organsRequested:[
    {
        organ:String,
        timestamp:Number,
    }
  ],
  organsRecieved:[
    {
        organ:String,
        from:{
            hospitalName:String,
            location:String,
            contactEmail:String,
            phNum:Number,
        },
        timestamp:Number,
    }
  ]
});

const User = new mongoose.model("User", userSchema);

module.exports = User;

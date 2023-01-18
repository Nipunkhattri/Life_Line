const mongoose = require("mongoose");
const validator = require("validator");
const hospitalSchema = new mongoose.Schema({
    hospitals : [
        {
            name:{
                type:String,
            },
            logo:{
                type:String,
            },
            location:{
                type:String,
            },
            distance:{
                type:String,
            },
            contactEmail: {
                type:String,
                default:null,
            },
            contactPhone: {
                type:Number,
                default:null,
            },
            hospitalWebsite: {
                type:String,
            }
        }
    ]
});

const Hospital = new mongoose.model("Hospital", userSchema);

module.exports = Hospital;

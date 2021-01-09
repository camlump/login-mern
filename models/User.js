const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const classworkSchema = mongoose.Schema({
//     name: String,
//     time: Date,
//     todo: String,
//     isDone: false
// });

// const OutcomesSchema = mongoose.Schema({
//     name: String,
//     time: Date,
//     todo: String, 
//     isDone: false,
//     isApproved: false
// })

// const MeetupSchema = mongoose.Schema({
//     name: String,
//     time: Date,
//     location: String,
//     attended: false
// })
const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });


// const UserSchema = new Schema({
//     name: {type: String, required: true},
//     email: {type: String, required: true},
//     password: {type: String, required: true},
//     date: {type: Date, default: Date.now},
//     // classwork: [classworkSchema],
//     // outcomes: [OutcomesSchema],
//     // meetups: [MeetupSchema],


// })

module.exports= User = mongoose.model("users", UserSchema);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    // minlength: 10,
    required: true,
    // lowercase: true,
    // validate(value) {
    //   if (!validator.isEmail(value)) throw new Error("Email is invalid!!!");
    // },
  },

  password: {
    type: String,
    required: true,
    // validate(value) {
    //   if (!validator.isStrongPassword(value))
    //     throw new Error("Password is invalid!!!");
    // },
  },
});

// userSchema.methods.generateAuthTocken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
// };

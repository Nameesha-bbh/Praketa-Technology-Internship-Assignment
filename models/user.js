const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    gender:{
        type: String,
        required: true,
        trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
    }
});



const user = mongoose.model('User', schema);

module.exports = user;
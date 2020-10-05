const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserRegistrationSchema = new Schema({
    user_name: {
      type: String,
      required: true
    },
    phone:{
      type:Number,
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
    login_type:{
        type: String,
        default:'user',
      },
    otp:{
      type:Number,
      required: true
  
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

module.exports = User = mongoose.model("user_registeration", UserRegistrationSchema);

const SellerRegistrationSchema = new Schema({
    business:{
        type:String,
        required:true
    },
  name: {
    type: String,
    required: true
  },
  mobile:{
    type:Number,
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
  otp:{
    type:Number,
    required: true

  },
  city:{
      type:String,
      required:true
  },
  GSTIN:{
      type:String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Seller = mongoose.model("seller_registeration", SellerRegistrationSchema);


import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String, 
    unique: true
  },
  email: {
    type: String, 
    unique: true
  },
  fullname: {
    type: String
  },
  password: {
    type: String
  }
});


const User = mongoose.model("User", UserSchema);
export default User;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String },
  language: { type: String },
  phone: { type: String },
  province: { type: String },
  city: { type: String },
  postalCode: { type: String },
  address: { type: String },
}, {timestamps: true});
mongoose.models={};
export default mongoose.model("User", UserSchema );

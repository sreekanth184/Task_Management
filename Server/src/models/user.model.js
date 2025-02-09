import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CONFIG from "../config/config.js";
const { SALT_ROUNDS, JWT_SECRET_KEY } = CONFIG;
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAccessToken = function () {
  let jwtPayload = {
    userId: this._id,
  };
  return jwt.sign(jwtPayload, JWT_SECRET_KEY, { expiresIn: "1d" });
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  next();
});

userSchema.post('save', (doc, next) => {
    console.log(doc)
    next()
})

userSchema.methods.isPasswordCorrect = async function (plainTextPassword) {
    return await bcrypt.compare(plainTextPassword, this.password)
}


export default mongoose.model('User', userSchema, 'users')
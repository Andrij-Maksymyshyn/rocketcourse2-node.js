const mongoose = require("mongoose");

const SecureFields = ["password"];

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, default: "" },
    lastName: { type: String, trim: true, default: "" },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
    },
    password: { type: String, minLength: 7, required: true, default: "" },
    age: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        for (const field of SecureFields) {
          delete ret[field];
        }
        return ret;
      },
    },
    toObject: {
      virtuals: true,
      transform: function (doc, ret) {
        for (const field of SecureFields) {
          delete ret[field];
        }
        return ret;
      },
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};

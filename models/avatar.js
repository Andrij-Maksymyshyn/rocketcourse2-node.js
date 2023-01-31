const mongoose = require("mongoose");

const avatarSchema = new mongoose.Schema(
  {
    url: { type: String, trim: true, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

avatarSchema.pre(/^find/, function () {
  this.populate("user");
});

const Avatar = mongoose.model("Avatar", avatarSchema);

module.exports = {
  Avatar,
};

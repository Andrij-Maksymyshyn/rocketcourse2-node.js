const mongoose = require("mongoose");

const oauthSchema = new mongoose.Schema(
  {
    accessToken: { type: String, trim: true, required: true },
    refreshToken: { type: String, trim: true, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

oauthSchema.pre(/^find/, function () {
  this.populate("user");
});

const Oauth = mongoose.model("Oauth", oauthSchema);

module.exports = {
  Oauth,
};

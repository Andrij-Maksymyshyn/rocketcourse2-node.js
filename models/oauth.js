const { Schema, model } = require("mongoose");

const oauthSchema = Schema(
  {
    accessToken: { type: String, trim: true, required: true },
    refreshToken: { type: String, trim: true, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Oauth = model("oauth", oauthSchema);

module.exports = {
  Oauth,
};

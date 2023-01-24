const mongoose = require("mongoose");

const actionTokenSchema = new mongoose.Schema(
  {
    token: { type: String, trim: true, required: true },
    actionType: { type: String, trim: true, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

actionTokenSchema.pre(/^find/, function () {
  this.populate("user");
});

const ActionToken = mongoose.model("Action_Token", actionTokenSchema);

module.exports = {
  ActionToken,
};

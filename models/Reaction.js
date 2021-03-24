const { Schema, model, Types } = require("mongoose");
const Validator = require("../Utils/validation");

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    required: true,
    ref: "Users",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

module.exports = reactionSchema;
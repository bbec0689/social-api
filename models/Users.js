const { Schema, model } = require("mongoose");
const Validator = require("../Utils/validation");

const isValid = new Validator();
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "Username is required",
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: "Email is required",
      validate: [isValid.emailValidator, "Please enter a valid email"],
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "Users",
        },
      ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("User", UserSchema);
module.exports = User;
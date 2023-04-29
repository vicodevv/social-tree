import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    
});

userSchema.pre("save", function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });

const User = model("User", userSchema);

  userSchema.statics.findOneByEmail = function(email: string) {
    return this.findOne({ email });
  };
export default User;
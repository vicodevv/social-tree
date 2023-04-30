import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const LinkSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    url: {
        type: String,
        required: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const Link = model("Link", LinkSchema);
export default Link;
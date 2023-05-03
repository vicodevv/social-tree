import mongoose from "mongoose";
import config from "config";
const dotenv = require("dotenv");

dotenv.config();

async function connectToDb() {
    const dbUri = process.env.MONGODB_URI!;

    try {
        mongoose.connect(dbUri);
        console.log("Connected to MongoDB");
    }
    catch (e) {
        process.exit(1);
    }
}

export default connectToDb;
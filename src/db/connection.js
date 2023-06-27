import { connect } from "mongoose";

export const connectToDatabase = async (uri) => {
    await connect(uri)
    console.log("Connected to Database");
}
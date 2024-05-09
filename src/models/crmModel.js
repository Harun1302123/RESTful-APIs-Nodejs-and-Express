import mongoose from "mongoose";

const Schema = mongoose.Schema;
export const contactSchema = new Schema({
    name: String,
    email: String,
    phone: String
});
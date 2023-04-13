import mongoose, { Schema } from "mongoose";
import { UserInterface } from "../interfaces/user.interface";

const userSchema = new Schema<UserInterface>({
    name: {type: String, require: true},
    email: {type: String},
    phone: {type: String, require: true},
    password: {type: String, require: true}
}, {timestamps: true})

export default mongoose.model<UserInterface>('User', userSchema)
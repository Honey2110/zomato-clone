import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { String },
    address: [{ details: { type: String }, for: {type: String }}],
    phoneNumber: [{ Numbers }]
},{
    timestamps: true,
});

//attachments
UserSchema.methods.generateJwtTokens = function () { };

//helpers
UserSchema.statics.findbyEmailandphone = async () => { };
UserSchema.statics.findbyEmailandPassword = async () => { };

export const UserModel = mongoose.Model("users", UserSchema);
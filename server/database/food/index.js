import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    iscontainsegg: { type: Boolean, required: true },
    category : {tyep:String, required : true},
    photos: {
        type: mongoose.Type.ObjectId,
        ref : "images",
    },
    price: { type: Number, default: 150, required: true },
    addons: [{
        type: mongoose.Types.ObjectId,
        ref:"foods"
    }],
    restaurant: { type: mongoose.Types.ObjectId,
        ref: "restaurants",
        required: true
}
}, {
    timestamps: true,
}) 
export const FoodModel = mongoose.Model("foods",FoodSchema)
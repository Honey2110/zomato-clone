import mongoose from "mongoose";

const reviewSchema =new mongoose.Schema({
    foods: { type: mongoose.Types.ObjectId, ref: "foods" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "restaurants" },
    user: { types: String, ref : "users" },
    rating: { type: Number, required: true },
    reviewtext: { type: String, required: true },
    isRestaurantReview: Boolean,
    isFoodReview:Boolean,
    photos: {
        types: mongoose.types.Objectid,
        ref: "images"
    }

}, {
    timestamps: true,
});

export const reviewModel = mongoose.Model("reviews", reviewSchema);
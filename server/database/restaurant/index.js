import mongoose from  "mongoose";

const restaurantSchema = new mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String, required:true},
    address:{type:String, required:true},
    maploaction:{type:String , required : true},
    cuisine:[String],
    restaurantTiming: String,
    contactNumber:Number,
    website:String,
    Timings:Numbers,
    popularDishes:[String],
    averageCost:Number,
    amenities:[String],
    menuimages: { type: mongoose.Types.ObjectId, ref: "images" },
    menu: { type: mongoose.Types.ObjectId, ref: "menus" },
    review: [{ type: mongoose.Types.ObjectId, ref: "reviews" }],
    photos:{type:mongoose.Types.ObjectId , ref:"images"}, 
}, {
    timestamps: true
});
export const restaurantModel = new mongoose.Model("restaurants", restaurantSchema);
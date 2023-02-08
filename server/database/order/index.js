import mongoose from "mongoose";

const OrderSchema = new mongoose.Schmea({
    orders: {
            user: { type: mongoose.Types.ObjectID,  ref : "users"},
            foods: [{
                details: [{ type:mongoose.Types.ObjectID,  ref: "foods" }],
                quatity: { type: Number, required: true }
                    }],
            paymode: { type: String, required: true },
            status: { type: String, default: placed },
            paymentdetails: {
                itemtotal: { type: mongoose.Types.ObjectId, required: true },
                tax: { types: Number, required: true },
                promo: { type: Number, required: true },
            razor_pay_id :{type:String , required:true},
                             }
            }
    }, {
    timestamps: true,
}); 

export const orderModel = mongoose.Model("orders", OrderSchema);
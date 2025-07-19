import mongoose from "mongoose";

 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sauravkumarmishra576:sauravkumar576@cluster0.faiaibn.mongodb.net/food_delivery').then(()=>console.log("DB Connected"));
}
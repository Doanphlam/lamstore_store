import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("Mongo already fucking connected");
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URL || "", {
            dbName: "lamstore_store"
        })
        isConnected = true;
        console.log("MongoDB is fucing connected");
    } catch (err) {
        console.log(err)
    }
}
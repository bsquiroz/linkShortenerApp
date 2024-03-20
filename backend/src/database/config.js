import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose
            .connect(process.env.MONGO_URL)
            .then(() => console.log("Connected!"));
    } catch (error) {
        console.log(error);
    }
};

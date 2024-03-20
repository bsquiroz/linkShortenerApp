import mongoose from "mongoose";

const ShortUrlSchema = new mongoose.Schema(
    {
        renameUrl: {
            type: String,
            required: true,
        },
        urlOriginal: {
            type: String,
            required: true,
        },
        slotUrl: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const ShortUrl = mongoose.model("shortUrl", ShortUrlSchema);

import mongoose, { Schema } from "mongoose"

const UrlSchema = new Schema({
    urlId: {
        type: String,
        required: true,
    },
    orignalUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
})

const Url = mongoose.model("Url" , UrlSchema )

export default Url
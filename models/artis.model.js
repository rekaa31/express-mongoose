const mongoose = require("mongoose")

const artisSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    genre: {
        type: String,
    },
    songs: {
        type: Array,
        "default" : []
    }
}, {
    timestamps: true,
    versionKey : false
})


const ArtisModel = mongoose.model("Artis", artisSchema)
module.exports = ArtisModel
const mongoose = require("mongoose")

let googleSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,

    },
    picture: {
        type: String,
    }
})

const googleUserModel = mongoose.model("social-logins", googleSchema)

module.exports = googleUserModel
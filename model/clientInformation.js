let mongoose = require("mongoose")

let clientData = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    subject: {
        type: String,
        require: true,

    },
    Message: {
        type: String,
        require: false
    }
})


let clientModel = mongoose.model("client", clientData)

module.exports = clientModel
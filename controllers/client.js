
let clientModel = require("../model/clientInformation")
let clientUser = async (req, res) => {
    try {
        const { sendEmail } = require("../api")


        const { name,
            email,
            subject,
            message } = req.body

        const exitingUser = clientModel.findOne({ email })

        if (!exitingUser) {
            res.status(200).json({
                message: "Email already exist"
            })
        }

        let user = new clientModel({
            name,
            email,
            subject,
            message
        })


        await user.save()

        res.status(200).json({
            message: "Thank you for connecting "
        })

        sendEmail(email, name, "Thanks for connecting us!", "https://portfolio-five-sandy-27.vercel.app")

    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: "Email already exist"
            })
        } else {
            return res.status(500).json({ message: "Server error" });
        }

    }
}

module.exports = clientUser



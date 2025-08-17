const jwt = require("jsonwebtoken")


function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']

    if (!authHeader) {
        res.status(401).json({
            error: 'no token provide'
        })
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
        res.status(401).json({ error: "Token missing after Bearer" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {

        if (err) {
            res.status(401).json({ error: "invalid or expired token" })
        }

        req.user=decode
        next()

    })

}

module.exports = verifyToken;
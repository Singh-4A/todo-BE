

const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const googleUserModel = require("../model/googleUser");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const googleUser = async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ error: "Token missing" });

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID, // must match frontend's
    });

    const payload = ticket.getPayload();

    const { name, picture, email, } = payload


    let user = await googleUserModel.findOne({ email });
    if (!user) {
      user = new googleUserModel({ name, picture, email });
      await user.save();
    }


    const myToken = jwt.sign(
      { email: payload.email, name: payload.name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_TIMEOUT }
    );

    res.json({
      token: myToken,
      name: name,
      message: "User signed up successfully"
    });
  } catch (err) {
    console.error("Google Auth Error:", err);
    res.status(401).json({ error: "Invalid Google token" });
  }
};

module.exports = { googleUser };

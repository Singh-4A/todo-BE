const signupModel = require("../model/userSignupModel");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const uniqueKey = "testing-key";

const signup = async (req, res) => {
  try {
    const { sendEmail } = require("../api");

    const { name, age, email, phone, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const specialCharRegex = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }


    // Check if user already exists
    let existingUser = await signupModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }


    if (!specialCharRegex.test(password)) {
      return res.status(400).json({
        message: 'Password must include at least one special character.',
      });
    }


    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    // Create new user
    const newUser = new signupModel({
      name,
      age,
      email,
      phone,
      password: hashedPassword,
    });
    await newUser.save();

    const { password: _, ...userData } = newUser.toObject();
    res.status(201).json({ message: "User signed up successfully", user: userData });

    sendEmail(email,name)



  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginUser = await signupModel.findOne({ email });
    if (!loginUser) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, loginUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = {
      id: loginUser._id,
      email: loginUser.email,
      role: loginUser.role,
    };

    const token = jwt.sign(payload, uniqueKey, { expiresIn: "1h" });

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signup,
  login,
};

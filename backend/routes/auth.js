const express = require("express");
const jwt = require("jsonwebtoken");
const Otp = require("../models/Otp");
const User = require("../models/User");
const router = express.Router();

// SIGNUP OTP 
router.post("/signup-request-otp", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.json({ msg: "Name and Email required" });

    let user = await User.findOne({ email });
    if (user) return res.json({ msg: "User already exists. Please login." });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.create({ email, otp });

    console.log("Signup OTP:", otp);
    res.json({ msg: "OTP sent successfully", otp });
  } catch (err) {
    console.error(err);
    res.json({ msg: "Server error" });
  }
});

//LOGIN OTP 
router.post("/login-request-otp", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.json({ msg: "Email required" });

    let user = await User.findOne({ email });
    if (!user) return res.json({ msg: "User not found. Please sign up first." });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.create({ email, otp });

    console.log("Login OTP:", otp);
    res.json({ msg: "OTP sent successfully", otp });
  } catch (err) {
    console.error(err);
    res.json({ msg: "Server error" });
  }
});

// VERIFY OTP 
router.post("/verify-otp", async (req, res) => {
  try {
    const { name, email, otp } = req.body;

    const record = await Otp.findOne({ email, otp });
    if (!record) {
      return res.json({ msg: "Invalid or expired OTP" });
    }

    let user = await User.findOne({ email });

    if (!user && name) {
      user = await User.create({ name, email });
    }

    if (!user) return res.json({ msg: "User not found" });

    const token = jwt.sign(
      { user: { id: user._id, email: user.email } },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    await Otp.deleteMany({ email });
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.json({ msg: "Server error" });
  }
});

module.exports = router;

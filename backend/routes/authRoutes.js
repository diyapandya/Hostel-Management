import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const router = express.Router();

// 🔹 REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log("📥 Incoming registration request:", req.body);

    const { name, email, password, role, roomNo, department, employeeId } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email, role });
    if (existingUser) {
      console.log("⚠️ User already exists:", email, role);
      return res.status(400).json({ message: "User already exists with this email and role" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      roomNo,
      department,
      employeeId,
    });

    console.log("✅ New user saved to MongoDB:", newUser);
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error("❌ Registration failed:", err.message);
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});

// 🔹 LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log("📥 Login request:", { email, password, role });

    // Check user
    const user = await User.findOne({ email, role });
    if (!user) {
      console.log("⚠️ User not found:", email, role);
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔑 Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    console.log("✅ Login successful:", email, role);
    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error("❌ Login failed:", err.message);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

export default router;

// @desc middleware handling exceptions inside of async
// express routes and passing them to our express error handlers
const asyncHandler = require("express-async-handler");
const AdminModel = require("../models/admin/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create Admin Dev
const createAdmin = asyncHandler(async (req, res) => {
  const { userId, password, role } = req.body;
  //Checks if user exists
  const adminExists = await AdminModel.findOne({ userId });

  if (adminExists) {
    res.status(400);
    throw new Error("Admin already registered");
  }
  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // Create Admin
  const adminUser = await AdminModel.create({
    userId,
    password: hashedPassword,
    role,
  });

  if (adminUser) {
    res.status(201).json(adminUser);
  } else {
    res.status(400);
    throw new Error("Invalid Admin Data");
  }
});

// Login Admin
// @desc    Authenticate Admin
// @acess   Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { userId, password } = req.body;

  const adminUser = await AdminModel.findOne({ userId });

  if (adminUser && (await bcrypt.compare(password, adminUser.password))) {
    res.status(201).json({
      userId: adminUser.userId,
      role: adminUser.role,
      token: generateToken(adminUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  createAdmin,
  loginAdmin,
};

// Update Admin

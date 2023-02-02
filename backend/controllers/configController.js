// @desc middleware handling exceptions inside of async
// express routes and passing them to our express error handlers
const asyncHandler = require("express-async-handler");
const AdminModel = require("../models/admin/adminModel");

// Create Admin Dev
const createAdmin = asyncHandler(async (req, res) => {
  const { userId, password, phone, service } = req.body;

  // Create Admin
  const adminUser = await AdminModel.create({
    userId,
    password,
    phone,
    service: [
      { service_name: "Rabies Vaccine", service_desc: "Prevent rabies" },
      { service_name: "Grooming", service_desc: "Haircut, Claw Maintenance" },
      {
        service_name: "Day Care",
        service_desc: "Dog staycation with 3 heavy meals",
      },
    ],
  });

  // Console logs
  if (adminUser) {
    res.status(201).json({
      userId: adminUser.userId,
      password: adminUser.password,
      phone: adminUser.phone,
      service: adminUser.service,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Admin Data");
  }
});

// Login Admin

module.exports = {
  createAdmin,
};

// Update Admin

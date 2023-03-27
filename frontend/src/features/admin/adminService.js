import axios from "axios";

// admin/owners
const API_URL = "https://pet-api-kct9.onrender.com/admin/";

const getUsers = async () => {
  const response = await axios.get(API_URL + "owners");

  return response.data;
};

// Create Appointment
const createApm = async (apmData) => {
  const response = await axios.post(API_URL + "create/apm", apmData);

  return response.data;
};

// Get One user data
const getOne = async (email) => {
  const response = await axios.get(API_URL + email);

  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(API_URL + "user/" + id);

  return response.data;
};

//  Fetch all appointments
const getAppointments = async () => {
  const response = await axios.get(API_URL + "sched");

  return response.data;
};

// Update Appointment
const updateAppointment = async (apmData) => {
  const apmId = apmData._id.toString();
  const response = await axios.put(API_URL + apmId, apmData);

  return response.data;
};

// Create TimeSlot
const createTimeSlot = async (apmData) => {
  const response = await axios.post(API_URL + "timeslot", apmData);

  return response.data;
};

// Login User
const loginAdmin = async (userData) => {
  const response = await axios.post(API_URL + "config", userData);

  if (response.data) {
    localStorage.setItem("adminUser", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout Admin
const logoutAdmin = async () => {
  localStorage.removeItem("adminUser");
};

const adminService = {
  getUsers,
  getAppointments,
  createApm,
  updateAppointment,
  getOne,
  deleteUser,
  loginAdmin,
  logoutAdmin,
};

export default adminService;

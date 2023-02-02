import axios from "axios";

// admin/owners
const API_URL = "/admin/";

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

const adminService = {
  getUsers,
  getAppointments,
  createApm,
  updateAppointment,
  getOne,
};

export default adminService;

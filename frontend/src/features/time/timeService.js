import axios from "axios";

// admin/owners
const API_URL = "/admin/timeslot";

const getAllTimeSlots = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Create TimeSlot
const createTimeSlot = async (apmData) => {
  const response = await axios.post(API_URL, apmData);

  return response.data;
};

// Create DefaultTimeSlot
const createDefaultSlot = async (dateSlot) => {
  const response = await axios.post(API_URL + "/default", dateSlot);

  return response.data;
};

// Delete TimeSlot
const deleteTimeSlot = async (timeData) => {
  const timeId = timeData.toString();
  const response = await axios.delete(API_URL + "/" + timeId);

  return response.data;
};

// Update Appointment
// Delete TimeSlot
const updateTimeSlot = async (timeData) => {
  const timeId = timeData._id.toString();
  const response = await axios.put(API_URL + timeId);

  return response.data;
};

const timeService = {
  getAllTimeSlots,
  createTimeSlot,
  deleteTimeSlot,
  updateTimeSlot,
  createDefaultSlot,
};

export default timeService;

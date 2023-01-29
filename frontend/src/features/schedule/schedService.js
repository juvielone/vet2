import axios from "axios";

const API_URL = "/api/schedule/";

// Create Schedule
const createSched = async (apmData) => {
  const response = await axios.post(API_URL, apmData);

  return response.data;
};

// Update Appointment
const updateApm = async (apmData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `/api/appointment/${apmData._id}`,
    apmData,
    config
  );

  return response.data;
};

// Fetch Schedules
const getSched = async (userEmail) => {
  const response = await axios.get(API_URL + userEmail);

  return response.data;
};

const apmService = {
  createSched,
  getSched,
  updateApm,
};

export default apmService;

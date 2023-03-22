import axios from "axios";

const API_URL = "https://pet-api-kct9.onrender.com/api/schedule/";

// Create Schedule
const createSched = async (apmData) => {
  const response = await axios.post(API_URL, apmData);

  return response.data;
};

// Update Schedule
const updateSchedule = async (apmData) => {
  const apmId = apmData._id.toString();
  const response = await axios.put(API_URL + apmId, apmData);

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
  updateSchedule,
};

export default apmService;

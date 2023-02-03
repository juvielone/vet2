import axios from "axios";

// admin/owners
const API_URL = "/admin/service";

const getAllService = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Create TimeSlot
const createService = async (srvData) => {
  const response = await axios.post(API_URL, srvData);

  return response.data;
};

// Delete TimeSlot
const deleteService = async (timeData) => {
  const srvId = timeData.toString();
  const response = await axios.delete(API_URL + "/" + srvId);

  return response.data;
};

// Update Appointment
// Delete TimeSlot
const updateService = async (srvData) => {
  const srvID = srvData._id.toString();
  const response = await axios.put(API_URL + "/" + srvID, srvData);

  return response.data;
};

const srvService = {
  getAllService,
  createService,
  deleteService,
  updateService,
};

export default srvService;

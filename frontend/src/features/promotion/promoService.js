import axios from "axios";

// admin/owners
const API_URL = "https://pet-api-kct9.onrender.com/admin/promo";

const getAllPromo = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Create Promo
const createPromo = async (promoData) => {
  const response = await axios.post(API_URL, promoData);

  return response.data;
};

// Delete Promo
const deletePromo = async (promoData) => {
  const promoId = promoData.toString();
  const response = await axios.delete(API_URL + "/" + promoId);

  return response.data;
};

// Update Appointment
// Delete TimeSlot
const updatePromo = async (promoData) => {
  const promoID = promoData._id.toString();
  const response = await axios.put(API_URL + "/" + promoID, promoData);

  return response.data;
};

const promoService = {
  getAllPromo,
  createPromo,
  deletePromo,
  updatePromo,
};

export default promoService;

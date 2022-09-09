import axios from 'axios'

// admin/owners
const API_URL = '/admin/'

const getUsers = async () => {



    const response = await axios.get(API_URL + "owners")

    return response.data
}

// Get One user data
const getOne = async (id) => {

    const response = await axios.get(API_URL + id)

    return response.data
}

//  Fetch all appointments
const getAppointments = async () => {

    const response = await axios.get(API_URL + "sched")

    return response.data
}


// Update Appointment
const updateAppointment = async (apmData) => {
    const apmId = apmData._id.toString();
    const response = await axios.put(API_URL + apmId, apmData)

    return response.data
}



const adminService = {
    getUsers, getAppointments, updateAppointment, getOne
}

export default adminService;
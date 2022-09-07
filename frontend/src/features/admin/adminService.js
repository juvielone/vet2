import axios from 'axios'

// admin/owners
const API_URL = '/admin/'

const getUsers = async () => {



    const response = await axios.get(API_URL + "owners")

    return response.data
}

const getAppointments = async () => {

    const response = await axios.get(API_URL + "sched")

    return response.data
}


const adminService = {
    getUsers, getAppointments
}

export default adminService;
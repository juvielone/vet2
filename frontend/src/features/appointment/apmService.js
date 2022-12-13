import axios from 'axios'

const API_URL = '/api/appointment/'

// Create Appointment
const createApm = async (apmData, token) => {


    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, apmData, config)

    return response.data

}


// Update Appointment
const updateApm = async (apmData, token) => {


    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(`/api/appointment/${apmData._id}`, apmData, config)

    return response.data

}




const getApm = async (token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}


const apmService = {
    createApm, getApm, updateApm
}

export default apmService;
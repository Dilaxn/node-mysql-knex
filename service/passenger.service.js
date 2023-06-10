const passengerRepository = require("../repository/passenger.repository")
// const passwordEncoder = //service
const getAllPassengers = async () => {
    return await passengerRepository.getAllPassengers()
}

const getPassengerById = async(id) =>{
    return await passengerRepository.getPassengerById(id)
}

const createPassenger = async(name) =>{
    // const password = passwordEncoder.encode()
    return await passengerRepository.createPassenger({
        name:name
    });
}

module.exports = {
    getAllPassengers,
    getPassengerById,
    createPassenger
}
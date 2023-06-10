const testRepository = require('../repository/test.repository');

const getTests = async () => {;
    return await testRepository.getTests();
}


const getTest = async (id) => {
    return await testRepository.getTestById(id);
}

const createTest = async (name,timestamp_value,datetime_value) => {
    return await testRepository.createTest(name,timestamp_value,datetime_value);
}


const updateTest = async (id, name) => {
    return await testRepository.updateTest(id, name);
}

const deleteTest = async (id) => {
    return await testRepository.deleteTest(id);
}

module.exports = {
    getTests,
    getTest,
    createTest,
    updateTest,
    deleteTest
}
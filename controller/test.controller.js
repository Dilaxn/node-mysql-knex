const testService = require("../service/test.service")
const errorCatch = require("../middleware/errorCatch.middleware");

const getTests = async (req, res) => {
    const tests = await testService.getTests();
    return res.status(200).json({
        success: true,
        data: {
            tests
        }
    });
}

const getTest = async (req, res) => {
    const {id} = req.params;
    const test = await testService.getTest(id);
    return res.status(200).json({
        success: true,
        data: {
            test
        }
    });
}

const createTest = async (req, res) => {
    const {name,datetime_value,timestamp_value} = req.body;

    // TODO: validate name,datetime_value,timestamp_value

    const timestamp_ = new Date(timestamp_value);
    const datetime_ = new Date(datetime_value);

    const test = await testService.createTest(name,timestamp_,datetime_);
    return res.status(200).json({
        success: true,
        data: {
            test
        }
    });
}

const updateTest = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const test = await testService.updateTest(id, name);
    return res.status(200).json({
        success: true,
        data: {
            test
        }
    });
}

const deleteTest = async (req, res) => {
    const {id} = req.params;
    const test = await testService.deleteTest(id);
    return res.status(200).json({
        success: true,
        data: {
            test
        }
    });
}

module.exports = {
    getTests: errorCatch(getTests),
    getTest: errorCatch(getTest),
    createTest: errorCatch(createTest),
    updateTest: errorCatch(updateTest),
    deleteTest: errorCatch(deleteTest),
}
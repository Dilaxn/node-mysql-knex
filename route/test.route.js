const express = require('express');
const router = express.Router();

const testController = require("../controller/test.controller");

router.route('/')
    .get(testController.getTests)
    .post(testController.createTest)

router.route('/:id')
    .get(testController.getTest)
    .put(testController.updateTest)
    .delete(testController.deleteTest)


module.exports = router;
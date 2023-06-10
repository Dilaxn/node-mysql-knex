const router = require('express').Router();
const testRouter = require("./test.route");

router.use("/test", testRouter);

module.exports = router;
const AppLogicError = require("../exception/AppLogicError");

const errorHandler = (error, req, res, next) => {
    console.log(error);

    if (error.name === "ValidationError") {
        return res.status(400).send({
            type: "ValidationError",
            details: error.details,
        });
    }

    if (error instanceof AppLogicError) {
        return res.status(error.statusCode).json({
            error_code: error.errorCode,
            message: error.message,
            success: false,
        });
    }

    return res.status(500).json({
        error_code: 500,
        message: "Internal server error",
        success: false,
    });

};

module.exports = errorHandler;
class ErrorHandler extends Error {
    constructor(err) {
        super();
        this.statusCode = err.statusCode;
        this.message = err.message;
    }
}

const handleError = (err, res) => {
    const { statusCode } = err;
    console.error("Error " +JSON.stringify(err));
    res.status(statusCode).send(err);
};

module.exports = {
    ErrorHandler,
    handleError
};
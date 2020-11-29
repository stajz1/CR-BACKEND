
exports.errors = {
    validation: {statusCode: 422,  message : "Please Check Input fields"},
    notFound: {statusCode: 404,  message: "Data not found"},
    server: {statusCode: 500,  message: "Server error"},
    unAuthorized: {statusCode: 401,  message: "Unauthorized"},
    duplicateCall: {statusCode: 400,  message: "Can't register again!"}
};

exports.keyValue = { user: "USER", patient: "PATIENT" }

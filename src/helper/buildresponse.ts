function bilbResponse(res, code, message) {
    res.status(code).send(message)
};

export default bilbResponse;
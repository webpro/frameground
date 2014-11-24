var generateResponse = function(req, res, next) {
    res.status(204);
    next();
};

module.exports = {
    path: '/contacts/:id',
    callback: generateResponse
};

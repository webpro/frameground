var generateResponse = function(req, res, next) {
    res.body = req.body;
    res.body.id = 6666;
    next();
};

var contacts = {
    path: '/contacts',
    callback: generateResponse
};

module.exports = contacts;

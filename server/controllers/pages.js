exports.index = (req, res) => {
    res.render('./flights/flights', req.commonData);
};

exports.error404 = (req, res) => res.sendStatus(404);
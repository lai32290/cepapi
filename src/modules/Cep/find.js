'use strict';

module.exports = (Organism) => {
    return (req, res) => {
        const callbackExpress = require('./organisms/organelles/callbackExpress');

        let obj = req.body;

        Organism.find(obj, (err, data) => {
            callbackExpress(err, data, res);
        });
    };
};
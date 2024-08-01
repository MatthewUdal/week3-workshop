const path = require('path');

module.exports = {
    route: (app) => {
        app.get('/', function (req, res) {
            res.sendFile(path.resolve('./www/index.html'));
        });
    }
};

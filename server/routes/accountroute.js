const path = require('path');

module.exports = {
    route: (app) => {
        app.get('/account', function (req, res) {
            res.sendFile(path.resolve('./www/account.html'));
        });
    }
};

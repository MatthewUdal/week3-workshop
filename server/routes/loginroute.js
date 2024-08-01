module.exports = {
    route: (app) => {
        app.post('/api/login', function (req, res) {
            let users = [
                {'email': 'abc@com.au', 'pwd': 'password'},
                {'email': 'dog@com.au', 'pwd': '123'},
                {'email': 'cat@com.au', 'pwd': '321'}
            ];

            if (!req.body) {
                return res.sendStatus(400);
            }

            let customer = {
                email: req.body.email,
                upwd: req.body.upwd,
                valid: false
            };

            for (let user of users) {
                if (req.body.email === user.email && req.body.upwd === user.pwd) {
                    customer.valid = true;
                    break;
                }
            }

            res.send(customer);
        });
    }
};

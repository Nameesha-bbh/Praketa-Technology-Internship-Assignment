const express = require('express')
const router = express.Router();

const loginRouter = require('./login');
const registerRouter = require('./register'); 

const defaultRoutes = [
    {
        path: '/login',
        router: loginRouter
    },
    {
        path: '/register',
        router: registerRouter
    }
]

defaultRoutes.forEach((val) => {
    router.use(val.path, val.router);
});

module.exports = router;

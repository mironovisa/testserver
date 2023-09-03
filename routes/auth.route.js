const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
const DBmongo = require("../services/users.service")
const users = new DBmongo("NFTMarketPlace", "users");
const { sign } = require('../utils/jwt');
const { findUserByEmailService } = require('../services/users.service');

route.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log('here');
    
    const data = {
        email: email,
        password: password,
    }

    const user = await users.findUserByEmailService(data.email);
    console.log(user);

    if (!user) {
        return res.status(400).send('user not exist or non valid password');
    }

    bcrypt.compare(data.password, user.password, function (err, valid) {
        // result == true
        if (valid) {
            const data = { id: user.id };
            const token = sign(data);

            res.send({ access_token: token, userid: user._id });
        } else {
            return res.status(400).send('user not exist or non valid password');
        }
    });


})

module.exports = route;
require('dotenv').config();
const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register new User
const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        });

        const savedUser = await user.save();

        res.status(201).json({
            _id: savedUser._id,
            email: savedUser.email,
            message: 'User created!',
        });
    } catch (error) {
        res.status(400).json({
            error,
            message: 'Error User was not created!',
        });
    }
};

//Login user
const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        res.status(400).json({
            message: 'Login failed, user not found',
        });
    } else {
        try {
            const match = await bcrypt.compare(
                req.body.password,
                user.password
            );

            if (match) {
                const accessToken = jwt.sign(
                    JSON.stringify(user),
                    process.env.ACCESS_TOKEN_SECRET
                );

                res.status(200).json({
                    id: user._id,
                    email: user.email,
                    message: 'Logged in Successfully',
                    accessToken: accessToken,
                });
            } else {
                res.status(400).json({
                    message: 'Invalid Credentials',
                });
            }
        } catch (error) {
            res.status(400).json({
                error,
                message: 'Error, user unable to login!',
            });
        }
    }
};

module.exports = {
    signup,
    login,
};

const mongoose = require('mongoose');
const { isModuleNamespaceObject } = require('util/types');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        firstName: {
            type: String,
            lowercase: true,
            required: [true, "can't be blank"],
        },
        lastName: {
            type: String,
            lowercase: true,
            required: [true, "can't be blank"],
        },
        email: {
            type: String,
            lowercase: true,
            required: [true, "can't be blank"],
            match: [/\S+@\S+\.\S+/, 'is invalid'],
            unique: true,
            index: true,
        },

        password: {
            type: String,
            minlength: 6,
            required: [true, "can't be blank"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('user', User);

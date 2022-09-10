const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true 
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    bitmoji: {
        type: String
    },
    score: {
        type: Number,
        default: 0
    },
    accessToken: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

module.exports = new model('users', userSchema, 'users')
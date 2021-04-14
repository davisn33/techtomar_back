const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },

},{ timestamps:{createdAt: 'created_at', updatedAt:'updated_at'} })


const User = mongoose.model('User', userSchema)

module.exports = User
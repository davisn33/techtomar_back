const mongoose = require('mongoose')

const cookiesSchema = mongoose.Schema({
    eng_title: {
        type: String,
        required: true,
        trim: true
    },
    ger_title: {
        type: String,
        required: true,
        trim: true
    },
    eng_description: {
        type: String,
        required: true
    },
    ger_description: {
        type: String,
        required: true
    }
},{ timestamps:{createdAt: 'created_at', updatedAt:'updated_at'} })


const Cookies = mongoose.model('Cookie', cookiesSchema)

module.exports = Cookies
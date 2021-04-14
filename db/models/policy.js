const mongoose = require('mongoose')

const policySchema = mongoose.Schema({
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


const Policy = mongoose.model('Policy', policySchema)

module.exports = Policy
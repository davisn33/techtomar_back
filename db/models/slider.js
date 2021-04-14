const mongoose = require('mongoose')

const sliderSchema = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true,
        trim: true
    }

},{ timestamps:{createdAt: 'created_at', updatedAt:'updated_at'} })


const Slider = mongoose.model('Slider', sliderSchema)

module.exports = Slider
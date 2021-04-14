const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://davisn33:123123123@cluster0.jbrce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
}, () => {
    console.log("😇 database connected")
})
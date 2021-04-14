const express  = require('express')
const app  = express()
const cors = require('cors')
const Routes = require('./routes')
const morgan  = require('morgan')
require('./db/connection')
const path = require('path')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))
app.use("/api",Routes)
app.use("/images",express.static(path.join(__dirname,'images')))
app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status = 404
    next(error)
});
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        message: error.message
    })
})
var PORT = 3000
app.listen(PORTT, ()=> {
    console.log(`🚀 at PORT ${PORT}`)
})

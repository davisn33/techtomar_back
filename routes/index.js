const Router = require('express').Router()
const AdminRouter = require('./admin.routes')
const UserRouter = require('./user.routes')
const AuthRouter = require('./auth.routes')

Router.use("/admin", AdminRouter)
Router.use("/user",UserRouter)
Router.use("/auth",AuthRouter)

module.exports = Router
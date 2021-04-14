const { getCookies, getPolicy, getSliders } = require('../controllers/user.controller')

const UserRouter = require('express').Router()

UserRouter.get("/getcookies",getCookies)
UserRouter.get("/getpolicy",getPolicy)
UserRouter.get("/getsliders",getSliders)


module.exports = UserRouter
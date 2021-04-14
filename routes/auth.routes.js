const { login } = require('../controllers/auth.controller')

const AuthRouter = require('express').Router()

AuthRouter.post("/login", login)

module.exports = AuthRouter
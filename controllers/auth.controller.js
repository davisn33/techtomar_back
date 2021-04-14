const User = require("../db/models/user")
const { loginValidation } = require("../utils/validation")

exports.login = (req, res) => {
    const { error } = loginValidation(req.body)
    if(error){
        return res.status(400).json({
            success: false,
            message:error.details[0].message
        })
    }
     User.findOne({email: req.body.email, password: req.body.password }, (err, result)=>{
       if(err){
           return res.status(500).json({
               success: false,
               message: "something went wrong"
           })
       } 
       if(!result){
           return res.status(401).json({
               success: false,
               message:"login failed"
           })
       }
       res.status(200).json({
           success: true,
           message: "login success"
       })
    })

}
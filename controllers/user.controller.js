const Cookies = require("../db/models/cookies")
const Policy = require("../db/models/policy")
const Slider = require("../db/models/slider")

exports.getCookies = (req, res) => {
    const cookies = Cookies.findOne((err,result)=>{
        res.status(200).json({
            success: true,
            message: "success",
            cookies: result
        })
    })
}
exports.getPolicy = (req, res) => {
    const policy = Policy.findOne((err,result)=>{
        res.status(200).json({
            success: true,
            message: "success",
            cookies: result
        })
    })
}

exports.getSliders = (req, res)=> {
    Slider.find((err, result)=>{
        var arr = []
        result.forEach(element => {
            arr.push({
                _id: element._id,
                title: element.title,
                img: element.img,
                url: "https://techtomarback.herokuapp.com/images/"+element.img,
                created_at: element.created_at,
                updated_at: element.updated_at

            })
        });
        res.status(200).json({
            success: true,
            message:"success",
            image:arr
        })
    })
}

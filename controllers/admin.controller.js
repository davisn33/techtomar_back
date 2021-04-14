const Policy = require("../db/models/policy")
const {
     addPolicyValidation,
     addCookiesValidation,
     addSliderValidation,
     deleteSliderValidation
     } = require("../utils/validation")
const Cookies = require("../db/models/cookies")
const Slider = require("../db/models/slider")



exports.addPolicy = (req, res) =>{
    const { error } = addPolicyValidation(req.body)
    if(error){
        return res.status(400).json({
            success: false,
            message:error.details[0].message
        })
    }
  Policy.updateOne({},req.body,{upsert: true}, function(err, docs){
        if(err){
            res.status(400).json({
                success: false,
                message: "failed to add policy"
            })
        }else{
            res.status(200).json({
                success: true,
                message:"successfully added new policy"
            })
        }

    })

}

exports.addCookies = (req, res) =>{
    const { error } = addCookiesValidation(req.body)
    if(error){
        return res.status(400).json({
            success: false,
            message:error.details[0].message
        })
    }
    Cookies.updateOne({},{"$set":{eng_title: req.body.eng_title, ger_title: req.body.ger_title, eng_description: req.body.eng_description, ger_description: req.body.ger_description}},{upsert: true}, function(err, docs){
        if(err){
            res.status(400).json({
                success: false,
                message: "failed to add cookies"
            })
        }else{
            res.status(200).json({
                success: true,
                message:"successfully added new Cookies"
            })
        }

    })
}

exports.addSlider =async (req, res)=>{

    const { error } = addSliderValidation(req.body)
    if(error){
        return res.status(400).json({
            success: false,
            message:error.details[0].message
        })
    }
    const slider = new Slider({
        title: req.body.title,
        img: req.file.filename
    })
    try {
        const savedSlider = await slider.save()
        res.status(200).json({
            success: true,
            message: "saved successfully",
            slider: savedSlider
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "failed to add slider"+error.message
        })
    }
}

exports.deleteSlider = (req, res)=>{
    const {error} = deleteSliderValidation(req.body)
    if(error){
        return res.status(400).json({
            success: false,
            message:error.details[0].message
        })
    }
    Slider.findByIdAndDelete(req.body.slider_id,function(err,docs) {
        if(err){
            return res.status(400).json({
                success: false,
                message: "failed to delete"
            })
        }
        res.status(200).json({
            success: true,
            message:"successfully deleted"
        })
    })
}

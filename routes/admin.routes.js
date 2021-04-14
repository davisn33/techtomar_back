const { addPolicy, addCookies, addSlider, deleteSlider } = require('../controllers/admin.controller')

const AdminRouter = require('express').Router()
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.fieldname + '-' + Date.now()+"."+file.originalname.split('.')[1])
    }
});
 
var upload = multer({ storage: storage });


//Add
AdminRouter.post("/addpolicy", addPolicy)
AdminRouter.post("/addcookies", addCookies)
AdminRouter.post('/addslider',upload.single('img'),addSlider)
AdminRouter.post("/deleteslider", deleteSlider)

module.exports = AdminRouter
var express = require('express')
var router = express.Router()

router.get("/", function(req,res,err){
    res.render("register");
})

router.post("/", function(req, res, err){
    // console.log(req.body);
    res.send(req.body)
})

module.exports = router
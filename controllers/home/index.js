//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/auth");
const auth = require("../authmiddleware");

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// USER HOME PAGE
router.get("/", auth, (req, res)=>{
        res.render("profile.jsx", { 
            user: req.session
        })
})

//UPDATE

router.put("/", auth, (req,res)=>{
    User.findByIdAndUpdate(req.session._id, req.body, {new:true}, (error, updateModel)=>{
        res.redirect("/profile")
    })
})

//EDIT

router.get("/edit", auth, (req, res)=> {
        res.render("profile/edit.jsx", {
            user: req.session
    })
})

module.exports = router

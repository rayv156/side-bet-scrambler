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
router.get("/:id", auth, (req, res)=>{
    User.findById(req.params.id, (error, foundUser)=> {
        res.render("profile.jsx", {
           user: foundUser,
           index: req.params.id
    })
    })
})

module.exports = router

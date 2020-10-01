//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/auth");
const auth = require("../authmiddleware");
const Course = require("../../models/course")
const Round = require("../../models/round")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// USER HOME PAGE w modal
router.get("/", auth, (req, res)=>{
    Course.find({}, (error, allCourses)=>{
        res.render('profile/profile.jsx', {
            user: req.session,
            course: allCourses
        })
    })
})

router.get("/summary", auth, (req, res)=>{
    User.findByIdAndUpdate(req.session._id, req.body, {new:true}, (error, updateModel)=>{
        Course.findOne({name: req.session.currentCourse}, (err, foundCourse)=>{
            res.render("profile/summary.jsx", {
                user: updateModel,
                course: foundCourse
            })
        })
    })
})


//NEW

router.get('/newround', auth, (req, res)=>{
    User.findByIdAndUpdate(req.session._id, req.body, {new:true}, (error, updateModel)=>{
        Course.findOne({name: req.session.currentCourse}, (err, foundCourse)=>{
            res.render("profile/newround.jsx", {
                user: updateModel,
                course: foundCourse
            })
        })
    })
    
})
//UPDATE

router.put("/", auth, (req,res)=>{
    User.findByIdAndUpdate(req.session._id, req.body, {new:true}, (error, updateModel)=>{
        res.redirect("/profile/newround")
    })
    
})

router.put("/newround", auth, (req,res)=>{
    User.findByIdAndUpdate(req.session._id, req.body, {new:true}, (error, updateModel)=>{
        Course.findOne({name: req.session.currentCourse}, (err, foundCourse)=>{
            res.render("profile/newround.jsx", {
                user: updateModel,
                course: foundCourse
            })
        })
    })
    
})


//CREATE
router.post('/summary', (req, res)=>{
    Round.create(req.body, (error, createdRound)=>{
        console.log(createdRound)
        res.redirect("/profile");
    });
});

//EDIT

router.get("/edit", auth, (req, res)=> {
        res.render("profile/edit.jsx", {
            user: req.session
    })
})

module.exports = router

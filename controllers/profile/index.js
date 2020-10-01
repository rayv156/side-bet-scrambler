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
    User.findByIdAndUpdate(req.session._id, req.body, {new:true}, (error, updateModel)=>{
    Course.find({}, (error, allCourses)=>{
        Round.find({user: req.session.username}, (error, allRounds)=>{
            res.render('profile/profile.jsx', {
                user: updateModel,
                course: allCourses,
                round: allRounds
        })
        })
    })
})
})

router.get("/summary", auth, (req, res)=>{
    User.findByIdAndUpdate(req.session._id, req.body, {new:true}, (error, updateModel)=>{
        Course.findOne({name: updateModel.currentCourse}, (err, foundCourse)=>{
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
        Course.findOne({name: updateModel.currentCourse}, (err, foundCourse)=>{
            res.render("profile/newround.jsx", {
                user: updateModel,
                course: foundCourse
            })
        })
    })
    
})

//DELETE

router.delete('/history/:id', (req,res)=>{
    Round.findByIdAndRemove(req.params.id, (error, foundRound)=>{
        res.redirect("/profile/history")
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
        Course.findOne({name: updateModel.currentCourse}, (err, foundCourse)=>{
            res.render("profile/newround.jsx", {
                user: updateModel,
                course: foundCourse
            })
        })
    })
    
})


//CREATE
router.post('/summary', async (req, res)=>{
    Round.create(req.body, (error, createdRound)=>{
        res.redirect("/profile");
    });
});

//EDIT

router.get("/edit", auth, (req, res)=> {
        res.render("profile/edit.jsx", {
            user: req.session
    })
})

//SHOW
router.get("/history", auth, (req, res)=>{
    Round.find({user: req.session.username}, (error, allRounds)=>{
        res.render('profile/history.jsx', {
            user: req.session,
            round: allRounds
        })
    })
})

router.get("/history/:id", auth, (req, res)=>{
    Round.findById(req.params.id, (error, foundRound)=>{
        res.render('history/show.jsx', {
            user: req.session,
            round: foundRound
        })
    })
})

module.exports = router

//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const Course = require("/Users/rayvelasquez/Projects/Project_2/side-bet-scrambler/models/course/index.js");
const test = require("/Users/rayvelasquez/Projects/Project_2/side-bet-scrambler/models/course/test.js")
const auth = require("../authmiddleware");
// // IMPORT DATABASE CONNECTIONS
// const mongoose = require("mongoose");
// const mongoURI = "mongodb+srv://rayv156:1234@sei.hyibv.mongodb.net/side-bet-scrambler?retryWrites=true&w=majority";
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// // Connection Error/Success - optional but can be helpful
// // Define callback functions for various events
// db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
// db.on("connected", () => console.log("mongo connected: ", mongoURI));
// db.on("disconnected", () => console.log("mongo disconnected"));

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// Course.insertMany(test, (error, tests) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(tests);
//     }
//     db.close();
//   });

// USER HOME PAGE
router.get("/", auth, (req, res)=>{
        res.render("profile/profile.jsx", { 
            user: req.session
        })
})

//UPDATE

router.put("/", auth, (req,res)=>{
    Course.findByIdAndUpdate(req.session._id, req.body, {new:true}, (error, updateModel)=>{
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
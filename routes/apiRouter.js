const express = require("express");
const userModel = require("../models/user");
const user = require("../models/user");
const router = express.Router();

// const users = [
//     { _id : "1" , name: "Umesh" },
//     { _id : "2" , name: "Jadhav"},
// ];  


// router.get("/users", (req, res) => {
//     res.json(users)
// });

// router.get("/users/:id" , (req, res)=> {
//     let found = users.find((elem) => elem._id === req.params.id);
//     if(!found) return res.json({ success: false , message : " user not found" })
//      res.json(found);
// })

// router.post("/users/create", (req, res) => {
//     let index = Math.floor(Math.random())
//     users.push({ _id : index, name: req.body.name})

//     res.json(users);
// })


router.get("/users", async (req, res) => {
   let users = await userModel.find();
   res.json(users);
});

router.post("/users", async (req, res) => {
  let users = await  userModel.create({
        username : req.body.username,
        name : req.body.name
     });
   res.json(users);
});


router.put("/users/:id", async (req, res)=>{
    let updatedusers =  await  userModel.findOneAndUpdate(
            {
                _id : req.params.id,
            },
            {
                name : req.body.name
            },
            {
                new: true
            }
        );
        res.json(updatedusers);
});
  

router.delete("/users/:id", async (req, res)=> {
    let deletedusers = await userModel.findOneAndDelete(
        {
            _id : req.params.id
        }
    );
    res.json(deletedusers);
})





module.exports = router;
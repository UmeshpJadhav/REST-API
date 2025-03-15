const express = require("express");
const userModel = require("../models/user");
const router = express.Router();

const users = [
    { _id : "1" , name: "Umesh" },
    { _id : "2" , name: "Jadhav"},
];  


router.get("/user", (req, res) => {
    res.json(users)
});

router.post("/user/create", (req, res) => {
    let index = Math.floor(Math.random())
    users.push({ _id : index, name: req.body.name})
})

module.exports = router;
const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRouter");
const connectDB = require("./models/user");

connectDB();



app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use("/api", apiRouter);


app.get("/", (req, rers) =>{

});


app.listen(3000);


const express = require("express");
const app = express();

require("dotenv").config();
app.use(require("cors")());
app.use(express.json());

require("./db/config/db.config");
const port = process.env.PORT || 3001;

const traineeRouter = require("./routes/trainee");
const trainerRouter=require("./routes/trainer");

app.get("/",async (req,res)=>{
  try{
    return res.status(200).send({
      message:"Welcome to the EyeLogBook API"
    })
  }catch(error){
    return res.status(400).send({
      message:"Error in sending response",
      error
    })
  }
});

app.use("/trainee", traineeRouter);
app.use("/trainer", trainerRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
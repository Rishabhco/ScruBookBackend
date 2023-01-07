const db=require("../db/config/db.config");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const Trainer = db.trainer;
const Token=db.tokens;

const signup=async (req, res) => {
    Trainer.findOne({
        attributes:["uid","name","phone","password","hospitalName","designation","email","dob","age"],
        where:{uid:req.body.uid}
    })
    .then(trainers=>{
        if(trainers){
            return res.status(205).send({message:"Trainer Already Exists"})
        }
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(err){
                return res.status(500).send({
                    message: err.message || "Some error occurred while hashing the password."
                });
            }
            const trainer = Trainer.build({
                uid: req.body.uid,
                name:req.body.name,
                password: hash,
                hospitalName:req.body.hospitalName,
                designation:req.body.designation,
                email:req.body.email,
                dob:req.body.dob,
                age:req.body.age,
                phone:req.body.phone
            });
            trainer.save()
            .then(data => {
                const token=Token.build({
                    val:jwt.sign({uid:req.body.uid},process.env.AUTH_KEY),
                    userId:req.body.uid
                })
                token.save()
                .then(token=>{
                    return res.status(200).send({
                        message: "Trainer Created Successfully",
                        data: {token,data}
                    });
                })
                .catch(error=>{
                    return res.status(500).send({
                        message:"Error in creating a token",
                        error
                    })
                })
            })
            .catch(error => {
                res.status(400).send({
                    message: "Error in Creating Trainer",
                    error
                });
            });
        });
    })
    .catch(error=>{
      res.status(500).send({  message: error.message || "Some error occurred while creating the Trainer." });
    })
}
  
const login=async (req, res) => {
    Trainer.findOne({                    
        attributes:["name","uid","password","phone","hospitalName","designation","email","dob","age"],
        where:{uid:req.body.uid}
    })
    .then(trainer=>{
        if(!trainer){
            return res.status(404).send({ message: "Trainer Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password,trainer.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                message: "Invalid Password!"
            });
        }
        const token=Token.build({
            val:jwt.sign({uid:trainer.uid},process.env.AUTH_KEY),
            userId:trainer.uid
        })
        token.save()
        .then(token=>{
            return res.status(200).send({
                message:"Details of Trainer",
                data:{trainer,token}
            });
        })
        .catch(error=>{
            return res.status(500).send({
                message:"Error in creating a token",
                error
            })
        });
    })
    .catch(error=>{
        res.status(400).send({
            message:"Cant find the details of Trainer ",
            error,
        })
    })
}
  
const profile=async(req,res)=>{
    try{
        const trainer=await Trainer.findOne({
            attributes:["name","uid","phone","hospitalName","designation","email","dob","age"],
            where:{uid:req.params.uid}
        })
        if(!trainer){
            res.status(404).send({
                message:"Trainer not found",
            })
        }else{
            res.status(200).send({
                message:"Details of Trainer",
                data:trainer
            })
        }
    }catch(error){
        res.status(400).send({
            message:"Error in finding the details of Trainer",
            error
        })
    }
}


const logout=async(req,res)=>{
    try{
        const token=await Token.destroy({where:{val:req.token}});         
        if(token===0){
            res.status(401).send({
                message:"Already signed out or token not found",
            })
        }else{
            res.status(200).send({
                message:"Signed Out Successfully",
            })
        }
    }catch(error){
        res.status(400).send({
          message:"Error in signing out",
        })
    }
}

module.exports={
    signup,
    login,
    profile,
    logout
}
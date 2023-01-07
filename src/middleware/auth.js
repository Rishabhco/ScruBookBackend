const jwt = require("jsonwebtoken");
const db=require("../db/config/db.config");
const Token=db.tokens

const auth = async(req, res, next) => {
    try{
        const tokenG=req.header('Authorization').replace('Bearer ','');
        const decoded=jwt.verify(tokenG,process.env.AUTH_KEY);
        Token.findOne({where:{val:tokenG}})
        .then(token=>{
            if(!token){
                return res.status(401).json({
                    message:"Not authorized"
                })
            }
            req.user=decoded;
            req.token=tokenG;
            next();
        })
        .catch(error=>{
            res.status(500).json({
                message:"Error in finding token",
                error
            })
        })
    }
    catch(error){
        res.status(401).send({error:"Please Authenticate",error})
    }
  };

module.exports=auth
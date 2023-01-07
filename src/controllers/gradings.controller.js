const db=require("../db/config/db.config");
const {v4:uuidv4}=require("uuid");
const Grading=db.grading;

const create=async(req,res)=>{
    Grading.findAll({
        where:{patientId:req.body.patientId}
    }).then(data=>{
        if(data.length!=0){
            return res.status(202).send({message:"Grading Already Added"})
        }
        const grade = Grading.build({
            uid: uuidv4(),
            ...req.body
        });
        grade.save()
        .then(data=>{
            res.status(200).send({message:"Grading Added Successfully",data})
        })
        .catch(error=>{
            res.status(400).send({message:"Error in Adding Grading",error})
        })
    }).catch(error=>{
        res.status(400).send({message:"Error in Adding Grading",error})
    })
}

const findSpecificPatient=async(req,res)=>{
    Grading.findAll({
        where:{patientId:req.body.uid}
    }).then(data=>{
        if(data.length==0){
            return res.status(202).send({message:"No Grading Added Till Now"})
        }
        res.status(200).send({message:"Grading Fetched Successfully",data})
    }).catch(error=>{
        res.status(400).send({message:"Error in Fetching Grading",error})
    })
}

const findSpecificTrainee=async(req,res)=>{
    Grading.findAll({
        where:{traineeUid:req.body.uid}
    }).then(data=>{
        if(data.length==0){
            return res.status(200).send({message:"No Grading Found"});
        }
        res.status(200).send({message:"Grading Fetched Successfully",data})
    }).catch(error=>{
        res.status(400).send({message:"Error in Fetching Grading",error})
    })
}

module.exports={
    create,
    findSpecificPatient,
    findSpecificTrainee
}
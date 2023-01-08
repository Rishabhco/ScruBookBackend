const db=require("../db/config/db.config");
const Patient=db.patient;

const create=async(req,res)=>{
    Patient.findAll({
        where:{uid:req.body.uid}
    }).then(data=>{
        if(data.length!=0){
            return res.status(202).send({message:"Patient Already Exists"})
        }
        const patient = Patient.build({
            ...req.body
        });
        patient.save()
        .then(data=>{
            res.status(200).send({message:"Patient Created Successfully",data})
        })
        .catch(error=>{
            res.status(400).send({message:"Error in Creating Patient",error})
        })
    }).catch(error=>{
        res.status(400).send({message:"Error in Creating Patient",error})
    })
}

const findOne=async(req,res)=>{
    Patient.findOne({
        where:{uid:req.body.uid}
    }).then(data=>{
        if(!data){
            return res.status(200).send({message:"No Patient Exists"})
        }
        res.status(200).send({message:"Patient Fetched Successfully",data})
    }).catch(error=>{
        res.status(400).send({message:"Error in Fetching Patient",error})
    })
}

const findAllSpecificTrainee=async(req,res)=>{
    Patient.findAll({
        where:{traineeUid:req.body.uid}
    }).then(data=>{
        if(data.length==0){
            return res.status(202).send({message:"No Patients Exist",data})
        }
        res.status(200).send({message:"Patients Fetched Successfully",data})
    }).catch(error=>{
        res.status(400).send({message:"Error in Fetching Patients",error})
    })
}


const findAllSpecificTrainer=async(req,res)=>{
    Patient.findAll({
        where:{trainerUid:req.body.uid}
    }).then(data=>{
        if(data.length==0){
            return res.status(200).send({message:"No Patients Exist"})
        }
        res.status(200).send({message:"Patients Fetched Successfully",data})
    }).catch(error=>{
        res.status(400).send({message:"Error in Fetching Patients",error})
    })
}

module.exports={
    create,
    findAllSpecificTrainee,
    findOne,
    findAllSpecificTrainer
}
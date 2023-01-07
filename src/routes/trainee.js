const express=require("express");
const auth=require("../middleware/auth");
const router = express.Router();

const traineeController=require("../controllers/trainee.controller");
const patientController=require("../controllers/patient.controller");
const gradingController=require("../controllers/gradings.controller");

router.post("/signup",traineeController.signup);
router.post("/login",traineeController.login);
router.get("/profile/:uid",auth,traineeController.profile);
router.get("/logout",auth,traineeController.logout);

router.post("/addPatient",auth,patientController.create);
router.post("/viewPatient",auth,patientController.findOne);
router.post("/getPatients",auth,patientController.findAllSpecificTrainee);

router.post("/getGradings",auth,gradingController.findSpecificPatient);
router.post("/getGradingsTrainee",auth,gradingController.findSpecificTrainee);

module.exports=router;
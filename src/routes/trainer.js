const express=require("express");
const auth=require("../middleware/auth");
const router = express.Router();

const trainerController=require("../controllers/trainer.controller");
const patientController=require("../controllers/patient.controller");
const gradingController=require("../controllers/gradings.controller");

router.post("/signup",trainerController.signup);
router.post("/login",trainerController.login);
router.get("/profile/:uid",auth,trainerController.profile);
router.get("/logout",auth,trainerController.logout);

router.post("/getPatients",auth,patientController.findAllSpecificTrainer);
router.post("/viewPatient",auth,patientController.findOne);

router.post("/addGrading",auth,gradingController.create);
router.post("/getGradings",auth,gradingController.findSpecificPatient);

module.exports=router;
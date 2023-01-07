const {Sequelize,DataTypes} = require("sequelize");
const sequelize = new Sequelize(process.env.PG_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("unable to connect to the database:", err);
  });

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.trainee=require("../schema/trainee.models")(sequelize, DataTypes);
db.trainer=require("../schema/trainer.models")(sequelize, DataTypes);
db.tokens=require("../schema/token.models")(sequelize, DataTypes);
db.patient=require("../schema/patients.models")(sequelize, DataTypes);
db.grading=require("../schema/gradings.models")(sequelize, DataTypes);

db.trainee.hasMany(db.patient, { as: "patients" });
db.patient.belongsTo(db.trainee);

db.trainer.hasMany(db.patient, { as: "patients" });
db.patient.belongsTo(db.trainer);

db.patient.hasOne(db.grading, {foreignKey: 'patientId'});

db.trainer.hasMany(db.grading, { as: "gradings" });
db.grading.belongsTo(db.trainer);

sequelize
  .sync({ force: false })                          
  .then(() => {
    console.log("Database & Tables created!");
  })
  .catch((err) => {
    console.log("Error creating database:", err);
  });                                                     

module.exports = db;

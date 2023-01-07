module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define("patient",
    {
        uid:{
            type: DataTypes.STRING, 
            primaryKey: true,
        },
        mrno:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        name:{
          type: DataTypes.STRING,
          allowNull:false
        },
        phone:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sex:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateOfSurgery:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        placeOfSurgery:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        anteriorSegmentDiagnosis:{
            type: DataTypes.STRING,
        },
        posteriorSegmentDiagnosis:{
            type: DataTypes.STRING,
        },
        systemicDiagnosis:{
            type: DataTypes.STRING,
        },
        eyeOfSurgery:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        typeOfSurgery:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        preOpVision:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        postOPUcva:{
            type: DataTypes.STRING,
        },
        postOPUcvaPH:{
            type: DataTypes.STRING,
        },
        complicationsIntraOP:{
            type: DataTypes.STRING,
        },
        complicationsPostOPDayOne:{
            type: DataTypes.STRING,
        },
        complicationsPostOPDayThirty:{
            type: DataTypes.STRING,
        },
        assistedStep:{
            type: DataTypes.STRING,
        },
        preOpAstigmatism:{
            type: DataTypes.STRING, 
        },
        postOpAstigmatism:{
            type: DataTypes.STRING,
        },  
        commplicationReason:{
            type: DataTypes.STRING,
        },
        videoLink:{
            type:DataTypes.STRING
        }
      },
      {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  return Patient;
};
module.exports = (sequelize, DataTypes) => {
    const Grading = sequelize.define("grading",
    {
      uid:{
        type: DataTypes.STRING,
        primaryKey: true,
      },
      draping:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      scleralAccess:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      sclerocorneal:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      cornealEntry:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      paracentesis:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      capsulorrhexisCommencement:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      capsulorrhexisFormation:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      hydrodissection:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      prolapse:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      nucleusExtraction:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      irrigation:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      lensInsertion:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      woundClosure:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      globalIndices:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      eyePositioning:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      conjunctival:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      intraocular:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      irisProtection:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      overallSpeed:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      total:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      traineeUid:{
        type: DataTypes.STRING,
        allowNull:false
      }
    },
      {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  return Grading;
};
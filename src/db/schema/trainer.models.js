module.exports = (sequelize, DataTypes) => {
    const Trainer = sequelize.define("trainer",
    {
      uid:{
        type: DataTypes.STRING, 
        primaryKey: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull:false
        },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      hospitalName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      designation:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      age:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phone:{
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Trainer;
};
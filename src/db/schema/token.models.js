module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define(
      "token",
      {
        id: {
           type: DataTypes.UUID,
           defaultValue: DataTypes.UUIDV4,
           primaryKey: true,
        },
        val: {
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
  return Token;
};
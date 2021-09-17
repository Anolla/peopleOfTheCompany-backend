const employees = (sequelize, DataTypes) =>
  sequelize.define("employees", {
    fullName: { type: DataTypes.STRING, required: true, unique: true  },
    email: {
      type: DataTypes.STRING,
      required: true,
    },
  });

module.exports = employees;
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", { //create table
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    username: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    college: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  // Users.associate = (models) => {
  //   Users.hasMany(models.Theses, {
  //     onDelete: "cascade",
  //   });
  // };

  return Users;
};
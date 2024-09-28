module.exports = (sequelize, DataTypes) => {
  const Theses = sequelize.define("Theses", {
    filename: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    pdfData: {
      type: DataTypes.BLOB("long"),
      allowNull: false 
    }
  }); 

  return Theses;
}
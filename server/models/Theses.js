module.exports = (sequelize, DataTypes) => {
  const Theses = sequelize.define("Theses", {
    filename: {
      type: DataTypes.STRING,
      allowNull: false,  // Assuming filename is required
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,  // Assuming filename is required
    },
    pdfData: {
      type: DataTypes.BLOB("long"),
      allowNull: false 
    }
  }); 

  return Theses;
}
const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(study_type_study_type_id_seq::regclass)",
      comment: null,
      primaryKey: true,
      field: "study_type_id",
      autoIncrement: false
    },
    name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    description: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "study_type",
    comment: "",
    indexes: []
  };
  const StudyTypeModel = sequelize.define("study_type_model", attributes, options);
  return StudyTypeModel;
};
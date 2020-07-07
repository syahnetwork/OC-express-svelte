const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(status_status_id_seq::regclass)",
      comment: null,
      primaryKey: true,
      field: "status_id",
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
    tableName: "status",
    comment: "",
    indexes: []
  };
  const StatusModel = sequelize.define("status_model", attributes, options);
  return StatusModel;
};
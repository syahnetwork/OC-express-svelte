const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    group_class_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(group_class_types_group_class_type_id_seq::regclass)",
      comment: null,
      primaryKey: true,
      field: "group_class_type_id",
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
    tableName: "group_class_types",
    comment: "",
    indexes: []
  };
  const GroupClassTypesModel = sequelize.define("group_class_types_model", attributes, options);
  return GroupClassTypesModel;
};
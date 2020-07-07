const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    item_data_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(item_data_type_item_data_type_id_seq::regclass)",
      comment: null,
      primaryKey: true,
      field: "item_data_type_id",
      autoIncrement: false
    },
    code: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "code",
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
    definition: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "definition",
      autoIncrement: false
    },
    reference: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "reference",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "item_data_type",
    comment: "",
    indexes: []
  };
  const ItemDataTypeModel = sequelize.define("item_data_type_model", attributes, options);
  return ItemDataTypeModel;
};
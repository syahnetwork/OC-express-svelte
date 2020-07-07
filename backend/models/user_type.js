const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(user_type_user_type_id_seq::regclass)",
      comment: null,
      primaryKey: true,
      field: "user_type_id",
      autoIncrement: false
    },
    user_type: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_type",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "user_type",
    comment: "",
    indexes: []
  };
  const UserTypeModel = sequelize.define("user_type_model", attributes, options);
  return UserTypeModel;
};
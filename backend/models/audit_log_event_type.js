const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    audit_log_event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(audit_log_event_type_audit_log_event_type_id_seq::regclass)",
      comment: null,
      primaryKey: true,
      field: "audit_log_event_type_id",
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
    }
  };
  const options = {
    tableName: "audit_log_event_type",
    comment: "",
    indexes: []
  };
  const AuditLogEventTypeModel = sequelize.define("audit_log_event_type_model", attributes, options);
  return AuditLogEventTypeModel;
};
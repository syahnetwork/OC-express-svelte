const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_subject_id",
      autoIncrement: false,
      references: {
        key: "study_subject_id",
        model: "study_subject_model"
      }
    },
    discrepancy_note_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "discrepancy_note_id",
      autoIncrement: false,
      references: {
        key: "discrepancy_note_id",
        model: "discrepancy_note_model"
      }
    },
    column_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "column_name",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dn_study_subject_map",
    comment: "",
    indexes: [{
      name: "i_dn_study_subject_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_study_subject_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_study_subject_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_study_subject_map_study_subject_id",
      unique: false,
      fields: ["study_subject_id"]
    }, {
      name: "i_dn_study_subject_map_study_subject_id",
      unique: false,
      fields: ["study_subject_id"]
    }, {
      name: "i_dn_study_subject_map_study_subject_id",
      unique: false,
      fields: ["study_subject_id"]
    }]
  };
  const DnStudySubjectMapModel = sequelize.define("dn_study_subject_map_model", attributes, options);
  return DnStudySubjectMapModel;
};
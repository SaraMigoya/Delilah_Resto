"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Role",
      paranoid: true,
    }
  );

  Role.createRole = async (role) => await Role.create(role);

  Role.getRoles = async () => await Role.findAll();

  Role.deleteRole = async (id) => await Role.destroy({ where: { id: id } });

  Role.getRole = async (id) => await Role.findByPk(id);

  return Role;
};

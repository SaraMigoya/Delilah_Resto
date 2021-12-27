
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Members.init({
    name: DataTypes.STRING,
    facebookUrl: DataTypes.STRING,
    instagramUrl: DataTypes.STRING,
    linkedinUrl: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Members',
    paranoid: true
  });


  Members.getMemberById = async (id) => await Members.findByPk(id);
  Members.getAllMembers = async () => await Members.findAll();
  Members.getCount = async (startIndex, size) => await Members.findAndCountAll({
    limit: size,
    offset: startIndex 
})
  Members.createMember = async(data) => await Members.create(data);
  Members.updateMember = async(bodyMember, id) => await Members.update( bodyMember, {
    where: { id: id }
});
  Members.deleteMember = async(id) => await Members.destroy({ where: {id: id}});
  return Members;
};
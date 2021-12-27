"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Slide.belongsTo(models.Organization)
    }
  }
  Slide.init(
    {
      imageUrl: DataTypes.STRING,
      text: DataTypes.TEXT,
      order: DataTypes.INTEGER,
      organizationId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "Slide",
      paranoid: true,
    }
  );

  Slide.createSlide = async (slide) => await Slide.create(slide);

  Slide.getSlides = async (attributes) => await Slide.findAll({attributes});

  Slide.getSlidesByOrg = async (organizationId) => await Slide.findAll({where: {organizationId}});

  Slide.findOrder = async (organizationId, order) => {
    const ong = await Slide.findOne({where: {organizationId, order}})
    return ong;
  };

  Slide.getLastOrderSlide = async (organizationId) => {
      return await Slide.findOne({order: [['order', 'DESC']], attributes: ['order'], where: {organizationId}})
  }

  Slide.deleteSlide = async (id) => await Slide.destroy({ where: { id: id } });

  Slide.getSlide = async (id) => await Slide.findByPk(id);

  Slide.updateSlide = async (id, data) => await Slide.update(data, {where:{id}});  

  return Slide;
};

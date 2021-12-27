"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Testimonial.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Testimonial",
      paranoid: true,
    }
  );

  Testimonial.getTestimonialById = async (id) => await Testimonial.findByPk(id);

  Testimonial.getAllTestimonials = async () => await Testimonial.findAll();

  Testimonial.createTestimonial = async (testimonial) =>
    await Testimonial.create(testimonial);

  Testimonial.updateTestimonial = async (data, id) => {
    await Testimonial.update(data, { where: { id: id } });
  };

  Testimonial.deleteTestimonial = async (id) =>
    await Testimonial.destroy({ where: { id: id } });
  
    Testimonial.getCountTestimonial = async (startIndex, size) => await Testimonial.findAndCountAll({
      limit: size,
      offset: startIndex 
  })

  return Testimonial;
};


module.exports = (sequelize, DataTypes) => {
  const { Model } = require('sequelize');

  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  };
  
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Category',
    paranoid: true
  });

  Category.getCategoryById = async(id) => {
    return await Category.findByPk(id)}
  
  Category.getAllCategories = async() => await Category.findAll({attributes:['name']}
  )

  Category.createCategory = async (category) => await Category.create(category)

  Category.updateCategory = async(data, id) =>{
    await Category.update(data, {where:{id:id}} )
  }

  Category.deleteCategory = async(id) =>{
    await Category.destroy({where: {id:id}})}
  
  Category.findAndCountAllCategory=async(startIndex,size)=>{
    return await Category.findAndCountAll({
      limit: size,
      offset: startIndex,
    })
    
  }

  return Category;
};

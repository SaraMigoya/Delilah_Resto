"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    static associate(models) {
      New.belongsTo(models.Category, { as: "category" });
    }
  }
  New.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      type:DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "New",
      paranoid: true,
    }
  );

  //get new by id
  New.getNewOne = async (id) => {
     await New.findByPk(id);
  };

  New.getNewAll = async () => {
    return await New.findAll();
  };

  //create

  New.createNew = async function (data) {
    data.type="new"
    return await New.create(data);
  };

  // update new
  New.newUpdate = async function (id, data) {
    await this.update(data, {
       where: { id: id },
     });
     return id;
   };

  // delete new
  New.deleteNew = async function (id) {
     return await this.destroy( {
      where: { id :id },
    });

  };

  New.findAndCountAllNew=async(startIndex,size)=>{
    return await New.findAndCountAll({
      limit: size,
      offset: startIndex,
    })
    
  }


  return New;
};


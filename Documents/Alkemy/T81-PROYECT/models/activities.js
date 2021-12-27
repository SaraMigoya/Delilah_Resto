"use strict";
  const { Model } = require("sequelize");
  module.exports = (sequelize, DataTypes) => {
    class Activities extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
        Activities.belongsToMany(models.User, { 
          as: 'User',
          through: "ActivityUser",
          foreignKey: { name: 'idActivities', allowNull: false }
        });        

      }
    }  
    Activities.init(
      {
        name: DataTypes.STRING,
        content: DataTypes.TEXT,
        image: DataTypes.STRING,
        deletedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Activities",
        paranoid: true
      },
      )
              
      Activities.getActivities = async() => await Activities.findAll();
        
      Activities.getActivity = async(id) => await Activities.findByPk(id);
  
      Activities.createActivities = async(activities) => await Activities.create(activities);
  
      Activities.updateActivities = async(activity, id) => await Activities.update(activity, { where: { id: id } });
  
      Activities.deleteActivities = async(id) => await Activities.destroy({ where: {id: id }});
       
      return Activities;
  }

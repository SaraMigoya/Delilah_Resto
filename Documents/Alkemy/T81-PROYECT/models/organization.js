'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Organization.hasMany(models.Slide);
    }
  };
  Organization.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    facebook: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    instagram: DataTypes.STRING,
    welcomeText: DataTypes.TEXT,
    aboutUsText: DataTypes.TEXT,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Organization',
    paranoid: true
  });

  //Methods to retrieve data from the table Organizations

  //get all organizations (returns all the organizations from the db)
  Organization.getAllOrganizations = async function (){ return await this.findAll() };
  
  Organization.getAllOrganizationsPublic = async function (fields){
    return await this.findAll({attributes: fields})
  };

  //get organization by id (returns the organization)
  Organization.getOrganization = async function (id){ 
    if (!id){
      return await this.findOne(); //If id is null, get the first Org
    }
    return await this.findByPk(id);
  };

  Organization.getOrganizationPublic = async function (fields, id){
    if (!id){
      return await this.findOne({ //If id is null, get the first Org
        attributes: fields, 
        include: {
          association: 'Slides',
          attributes: ['id','order','imageUrl', 'text'],
        },
        order: [['Slides', 'order', 'ASC']]
        }); 
    }
    return await this.findByPk(id, {
      attributes: fields, 
      include: {
        association: 'Slides',
        attributes: ['id','order','imageUrl', 'text'],
      },
      order: [['Slides', 'order', 'ASC']]
      })
  }

  //create a new organization (returns the new organization)
  Organization.createOrganization = async function(data){ return await this.create(data) }

  //update an organization(id) (returns the id)
  Organization.updateOrganization = async function (data, organizationInstance){ 

    const organizationUpdated = await organizationInstance.update(data) 
    return organizationUpdated;

  }

  Organization.getSlidesFromOrg = async function (instance){
    return await instance.getSlides()
  }

  //delete an organization (returns the id)
  Organization.deleteOrganization = async function (id) { 

    await this.destroy( {where: {id} } ) 
    return id;
  
  }

  return Organization;
};
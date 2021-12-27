'use strict';

const bcryptjs = require("bcryptjs");


const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {as: 'role'});
      User.belongsToMany(models.Activities, { 
        as: 'User',
        through: "ActivityUser",
        foreignKey: { name: 'idUser', allowNull: false }
    });
    }

  };
  User.init({
    firstName:DataTypes.STRING,

    lastName:DataTypes.STRING,

    email: DataTypes.STRING, 

    image: DataTypes.STRING, 

    password: DataTypes.STRING,

    roleId:  DataTypes.INTEGER,

    deletedAt: DataTypes.DATE,     
  }, {
    sequelize,
    modelName: 'User',

  });

  User.prototype.getAll = async()=>await User.findAll();
    
  User.prototype.getUserById = async (id) => await User.findByPk(id);

  User.prototype.getUserByEmail = async (email) => await User.findOne({ where: { email }});

  User.prototype.saveUser = async (body) =>{
    const salt = bcryptjs.genSaltSync();

    const user = new User({
      ...body,
      password: bcryptjs.hashSync(body.password, salt), 
    
    })

    await user.save()

    return user
  };

  User.prototype.update = async (id, data) => {
    const salt = bcryptjs.genSaltSync();

    if(data.password){
      data.password = bcryptjs.hashSync( data.password, salt )
    }

    await User.update({ ...data } , { where: { id } });

     /*  */
    
    
  };

  User.prototype.delete = async ( id ) => {
  const user = await User.findByPk(id);

  user.deletedAt = new Date();

  await user.save();

  return user;
    
  }; 

  return  User;

};



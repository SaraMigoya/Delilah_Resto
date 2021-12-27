'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Contacts = sequelize.define('Contacts', {
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    message: DataTypes.STRING,
    deleteAt: DataTypes.DATE
  }, {});
  Contacts.associate = function(models) {
    // associations can be defined here
  };

  Contacts.createContact = async(data) => await Contacts.create(data);
  Contacts.getAllContacts = async() => await Contacts.findAll(
    
  );
  return Contacts;
};
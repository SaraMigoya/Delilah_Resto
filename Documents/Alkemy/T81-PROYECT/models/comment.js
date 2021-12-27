"use strict";
const { Model } = require("sequelize");
const user = require("./user");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.New, { as: "new" });
      Comment.belongsTo(models.User, { as: "user"});
    }
  }
  Comment.init(
    {
      userId: DataTypes.INTEGER,
      body: DataTypes.STRING,
      newId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
  
    },
    {
      sequelize,
      modelName: "Comment",
      paranoid: true,
    }
  )

  Comment.getCommentById = async(id) => {
    return await Comment.findByPk(id)}
  
  Comment.getBodyComments = async() => await Comment.findAll({attributes:['body'], order: [['createdAt', 'DESC']]}
  )
 
  Comment.getCommentsPerNew = async(id) => await Comment.findAll({attributes:['userId','body','createdAt'], where:{newId:id}})

  Comment.createComment = async (comment) => await Comment.create(comment)

  Comment.updateComment = async(data, id) =>{
  await Comment.update(data, {where:{id:id}} )
    
    
  }

  Comment.deleteComment = async(id) =>{
    await Comment.destroy({where: {id:id}})}
  
  Comment.findAndCountAllComments=async(startIndex,size)=>{
    return await Comment.findAndCountAll({
      limit: size,
      offset: startIndex,
    })
    
  }

  return Comment;
}
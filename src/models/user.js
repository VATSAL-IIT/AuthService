'use strict';
const bcrypt=require('bcrypt');
const SALT= bcrypt.genSaltSync(10);

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role,{
        through:'User_Roles'                   //mapping table for user-role relationship.
      })
    }
  }
  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user)=>{
     const encryptedPassword=bcrypt.hashSync(user.password,SALT);
     user.password=encryptedPassword;
  })
  return User;
};
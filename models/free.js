"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Free extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Free.init(
    {
      freeId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      viewCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Free",
    }
  );
  return Free;
};

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

    Product.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        p_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        p_price: {
          type: DataTypes.DECIMAL,
          allowNull: false,
          validate: {
            isDecimal: true
          }
        },
        p_stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 10,
          Validate: {
            isNumeric: true
          }
        },
        c_Id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'category',
            key: 'id'
          }
        }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
      }
);

module.exports = Product;

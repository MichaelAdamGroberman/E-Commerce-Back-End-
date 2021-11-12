const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {foreignKey: 'c_Id'});

Category.hasMany(Product, {foreignKey: 'c_Id'});

Product.belongsToMany(Tag, {through: ProductTag,foreignKey: 'p_Id',});

Tag.belongsToMany(Product, {through: ProductTag,foreignKey: 't_Id',});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

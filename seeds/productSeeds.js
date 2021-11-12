const { Product } = require('../models');

const data = [
  {
    p_name: 'Car',
    p_price: 44999.99,
    p_stock: 10,
    c_Id: 4,
  },
  {
    p_name: 'Trucks',
    p_price: 100900.0,
    p_stock: 15,
    c_Id: 1,
  },
  {
    p_name: 'Bus',
    p_price: 77999.99,
    p_stock: 17,
    c_Id: 1,
  },
  {
    p_name: 'Hybrids Car',
    p_price: 50299.99,
    p_stock: 20,
    c_Id: 2,
  },
  {
    p_name: 'Old Cars',
    p_price: 30999.99,
    p_stock: 19,
    c_Id: 3,
  }

];

const seedProducts = () => Product.bulkCreate(data);

module.exports = seedProducts;

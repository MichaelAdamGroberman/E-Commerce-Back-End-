const { Category } = require('../models');
const cate_data = [
  {
    c_name: 'Toyota',
  },
  {
    c_name: 'Honda',
  },
  {
    c_name: 'Jeep',
  },
  {
    c_name: 'BMW',
  },
  {
    c_name: 'Subaru',
  },
];

const seedCategories = () => Category.bulkCreate(cate_data);
module.exports = seedCategories;

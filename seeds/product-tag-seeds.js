const { ProductTag } = require('../models');

const productdata = [
  {
    p_Id: 2,
    t_Id: 4,
  },
  {
    p_Id: 3,
    t_Id: 1,
  },
  {
    p_Id: 4,
    t_Id: 2,
  },
  {
    p_Id: 1,
    t_Id: 4,
  },
  {

    p_Id: 5,
    t_Id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productdata);

module.exports = seedProductTags;

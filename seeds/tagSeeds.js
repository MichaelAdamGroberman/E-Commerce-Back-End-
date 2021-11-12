const { Tag } = require('../models');

const data = [
  {
    t_name: 'white',
  },
  {
    t_name: 'black',
  },
  {
    t_name: 'gray',
  },
  {
    t_name: 'darkgary',
  }
];

const seedTags = () => Tag.bulkCreate(data);

module.exports = seedTags;

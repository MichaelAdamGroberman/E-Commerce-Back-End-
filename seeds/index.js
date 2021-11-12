const seedCategories = require('./categorySeeds');
const seedProducts = require('./productSeeds');
const seedTags = require('./tagSeeds');
const seedProductTags = require('./product-tag-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCategories();
  await seedProducts();
  await seedTags();
  await seedProductTags();
  process.exit(0);
};

seedAll();

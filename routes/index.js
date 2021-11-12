const router = require('express').Router();
const apiRoutes = require('./apis');

router.use('/e-commerce-back-end-', apiRoutes);

router.use((req, res) => {
  res.send("Wrong Route!")
});

module.exports = router;
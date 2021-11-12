const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['p_name', 'p_price', 'p_stock', 'c_Id']
    }
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['p_name', 'p_price', 'p_stock', 'c_Id']
    }
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {

  Tag.create({
    t_name: req.body.t_name
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.put('/:id', (req, res) => {
  
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if (!data){
        res.status(404).json({message:'Tag is not available!'});
        return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    if (!data) {
      res.status(404).json({message: 'Tag is not available'});
      return;
    }
    res.json(data);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;

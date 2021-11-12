const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'p_name', 'p_price', 'p_stock', 'c_Id']
    }
  })
    .then(cate_data => {
      if(!cate_data) {
        res.status(404).json({message: 'Categories is not available'});
        return;
      }
      res.json(cate_data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});


router.post('/', (req, res) => {
  
  Category.create({
    c_name: req.body.c_name
  })
    .then(cate_data => res.json(cate_data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




router.put('/:id', (req, res) => {
  
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(cate_data => {
      console.log(cate_data)
      if (!cate_data) {
        res.status(404).json({message:'Category is not available!'});
        return;
      }
      res.json(cate_data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.delete('/:id', (req, res) => {

  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(cate_data => {
      if (!cate_data){
        res.status(404).json({message: 'Category is not available!'});
        return;
      }
      res.json(cate_data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'p_name', 'p_price', 'p_stock', 'c_Id']
    }
  })
    .then(cate_data => {
      if(!cate_data) {
        res.status(404).json({message: 'Categories is not available'});
        return;
      }
      res.json(cate_data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});


module.exports = router;

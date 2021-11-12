const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');


router.get('/', (req, res) => {
  Product.findAll({
    attributes: ['id', 'p_name', 'p_price', 'p_stock'],
    include: [
      {model: Category,attributes: ['c_name']},
      {model: Tag,attributes: ['t_name']}
    ]
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Product.findOne({
    where: {id: req.params.id},
    attributes: ['id', 'p_name', 'p_price', 'p_stock'],
    include: [
      {model: Category, attributes: ['c_name']},
      {model: Tag,attributes: ['t_name']}
    ]
  })
    .then(data => {
      if (!data) {
        res.status(404).json({message: 'Product is not available'});
        return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
 Product.create({
    p_name: req.body.p_name,
    p_price: req.body.p_price,
    p_stock: req.body.p_stock,
    c_Id: req.body.c_Id,
    t_Id: req.body.t_Id
    })
    .then((product) => {
      if (req.body.t_Id.length) {
        const productt_IdArr = req.body.t_Id.map((t_Id) => {
          return {
            p_Id: product.id,
            t_Id,
          };
        });
        return ProductTag.bulkCreate(productt_IdArr);
      }
      res.status(200).json(product);
    })
    .then((productt_Ids) => res.status(200).json(productt_Ids))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.delete('/:id', (req, res) => {

  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    if (!data) {
      rs.status(404).json({message: 'product is not available'});
      return;
    }
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;

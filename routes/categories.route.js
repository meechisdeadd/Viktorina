const router = require('express').Router();
const Categories = require('../components/Categories');
const { Category, Question } = require('../db/models');



router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({include: Question});
    const html = res.renderComponent(Categories, {
      categories,
    });
    res.send(html);
  } catch (error) {
    console.log(error);
  }
});








// router.get('/:categoryId', async (req, res) => {
//     try {
//         const {categoryId} = req.params
//       const category = await Category.findOne({where: {id :Number(categoryId)}, include: Question});
//       const html = res.renderComponent(QuestionPage, {category
//       });
//       res.send(html);
//     } catch (error) {
//       console.log(error);
//     }
//   });
  
  module.exports = router;
  
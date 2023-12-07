const router = require('express').Router()
const Categories = require('../components/Categories')
const {Category} = require('../db/models')


router.get('/', async(req, res) =>{
   try {
    const categories = await Category.findAll()
    const html = res.renderComponent(Categories, {
        categories
    })
res.send(html)
   } catch (error) {
    console.log(error);
   }
})
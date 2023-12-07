const router = require('express').Router();

const RegaPage = require('../components/RegaPage');

router.get('/', async (req, res) => {
  const html = await res.renderComponent(RegaPage, {
    title: 'Регистрация',
  });
  res.send(html);
});

module.exports = router;

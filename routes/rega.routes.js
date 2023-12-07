const router = require('express').Router();
const RegaPage = require('../components/RegaPage');

const { User } = require('../db/models');

router.get('/', async (req, res) => {
  const html = await res.renderComponent(RegaPage, {
    title: 'Регистрация',
  });
  res.send(html);
});

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password, score } = req.body;
    if (name && email && password) {
      const user = await User.create({ name, email, password, score });
      res.app.locals.user = user;
      res.json({ message: 'success' });
    } else {
      res.status(400).send('Нужно заполнить все поля!');
    }
  } catch (message) {
    console.log(message);
    res.status(500).end;
  }
});

module.exports = router;

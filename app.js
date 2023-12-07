require('@babel/register');
const express = require('express');
const app = express();
const path = require('path');
const ssr = require('./middlewares/ssr');

app.use(ssr);
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: true })); //даем разрешение на чтение данных из body из формы
app.use(express.json());

// app.use('/', indexRouter);

app.listen(3000, () => console.log('На связи!'));

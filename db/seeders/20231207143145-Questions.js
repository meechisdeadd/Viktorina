'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'Кому принадлежит цитата?',
          answer: 'Махатма Ганди',
          img: '/image/jason/1.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Кому принадлежит цитата?',
          answer: 'Мухаммед Али',
          img: '/image/jason/2.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Кому принадлежит цитата?',
          answer: 'Джейсон Стетхем',
          img: '/image/jason/3.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Кому принадлежит цитата?',
          answer: 'Марк Твен',
          img: '/image/jason/4.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Кому принадлежит цитата?',
          answer: 'Владимир Путин',
          img: '/image/jason/5.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Из какого фильма данный кадр?',
          answer: 'Зеленый Слоник',
          img: '/image/films/1.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Из какого фильма данный кадр?',
          answer: 'Горбатая Гора',
          img: '/image/films/2.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Из какого фильма данный кадр?',
          answer: 'Хенкок',
          img: '/image/films/3.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Из какого фильма данный кадр?',
          answer: 'Побег из Шоушенка',
          img: '/image/films/4.webp',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Из какого фильма данный кадр?',
          answer: 'Афоня',
          img: '/image/films/5.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Как зовут Деда Мороза на Кипре?',
          answer: 'Василий',
          img: '/image/ny/1.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'Кто в 1700 году издал указ, согласно которому Новый год необходимо отмечать первого января?',
          answer: 'Петр Первый',
          img: '/image/ny/2.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Сколько резиденций имеет Дед мороз в России?',
          answer: '4',
          img: '/image/ny/3.avif',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Откуда пошла традиция новогодних фейерверков и салютов?',
          answer: 'Китай',
          img: '/image/ny/4.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'В каком году была изготовлена первая гирлянда?',
          answer: '1895',
          img: '/image/ny/5.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};

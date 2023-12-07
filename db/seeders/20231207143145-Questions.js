'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'Кому принадлежит цитата?',
          answer: 'Далай Лама',
          img: '',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Кому принадлежит цитата?',
          answer: 'Далай Лама',
          img: '',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Из какого фильма данный кадр?',
          answer: 'Побег из Шоушенка',
          img: '',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Из какого фильма данный кадр?',
          answer: 'Хенкок',
          img: '',
          categoryId: 2,
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

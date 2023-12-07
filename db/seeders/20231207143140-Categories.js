'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Цитаты Джейсона Стетхема',
          img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/958b0a05-f3f0-4755-8ff7-995137af84fc/220x330',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Угадай фильм',
          img: 'https://avatars.dzeninfra.ru/get-zen_doc/4394028/pub_64579a9c1027207a00136f0d_64579b36f98ff0723cc300b7/scale_1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

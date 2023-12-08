'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Цитаты Джейсона Стетхема',
          img: 'https://sun9-12.userapi.com/impg/_JcCPm3OAEzgPHXzSrTrcxmWa-3WBuU1ma7tzw/J3-0hGfvhuU.jpg?size=807x605&quality=96&sign=696e8e3cbb71df62234acdab43687474&c_uniq_tag=DxNuMu-9eyllBQVR1LKP13qNuCDjmmCwOuR8NdjMazg&type=album',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Угадай фильм по кадру',
          img: 'https://images.techinsider.ru/upload/img_cache/3ca/3cadf68150314b603d81892b6d4cdf42_cropped_666x441.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Вопросы про Новый Год',
          img: 'https://cdn.segodnya.ua/i/original/media/image/5de/f7a/b21/5def7ab219d8f.jpg',
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

'use strict';
var models = require('./../../models/sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
		  Add altering commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.bulkInsert('Person', [{
		    name: 'John Doe',
		    isBetaMember: false
		  }], {});
		*/
    var categories = [];
    for (let i = 0; i < 10; i++) {
      categories.push({
        name: `Bar${i}`,
      });
    }
    return queryInterface.bulkInsert('Categories', categories);
  },

  down: (queryInterface, Sequelize) => {
    /*
		  Add reverting commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.bulkDelete('Person', null, {});
		*/
    return queryInterface.bulkDelete('Products', null, {}, models.Product);
  },
};

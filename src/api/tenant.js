const Faker = require('faker');

module.exports = {
  getTenants: () => ([
    {
      id: Faker.random.uuid(),
      name: 'Discover',
      shortCode: 'DN',
    }, {
      id: Faker.random.uuid(),
      name: 'Diners Club',
      shortCode: 'DCI'
    }
  ])
};

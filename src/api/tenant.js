const Faker = require('faker');
const { range } = require('./utils');

module.exports = {
 createTenants: count => range(0,count).map(() => {
      const name = Faker.company.companyName();
      const shortCode = name.substr(0,3).split('').map(x => x.toUpperCase()).join('');

      return {
        id: Faker.random.uuid(),
        name,
        shortCode,
      };
  })
};

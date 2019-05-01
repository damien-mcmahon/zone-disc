const Faker = require('faker');
const { range } = require('./utils');

module.exports =  {
  createParties: (count, tenants) => range(0,count).map(() => {
      const randTenant = Math.max(0, Math.floor(Math.random() * tenants.length -1));
      const tenant = tenants[randTenant];

      return {
        id: Faker.random.uuid(),
        tenantId: tenant.id
      };
  })
};


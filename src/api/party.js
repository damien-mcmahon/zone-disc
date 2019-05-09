const Faker = require('faker');
const { range } = require('./utils');

module.exports =  {
  createParties: (count, tenants) => range(0,count).map(() => {
      const randTenant = Math.max(0, Math.floor(Math.random() * tenants.length -1));
      const tenant = tenants[randTenant];
      const partyName = Faker.company.companyName();
      const contactDetails = {
        contactType: 'CHANGE_CHANGE_CHANGE',
        postalAddress: {
          postalAddressLine1: Faker.address.streetAddress(),
          city: Faker.address.city(),
          state: Faker.address.stateAbbr(),
          postalCode: Faker.address.zipCode(),
          country: Faker.address.countryCode()
        },
          eAddress: [{
            address: Faker.internet.email(),
            addressType: 'email'
        }],
        teleAddress: [{
            telecommunicationNumber: Faker.phone.phoneNumberFormat(),
            telecomType: 'phone',
            extension: ''
        }]
      };

      return {
        id: Faker.random.uuid(),
        tenantId: tenant.id,
        partyName,
        contactDetails
      };
  })
};


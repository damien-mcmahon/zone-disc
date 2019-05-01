const Faker = require('faker');
const { range } = require('./utils');

module.exports = {
    createUsers: count => range(0,count).map(() => ({
        id: Faker.random.uuid(),
        name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
        roles: [{
        "name": "MAKER"
        }]
    }))
};
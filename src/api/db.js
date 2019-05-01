const { createUsers } = require('./user');
const { createTenants } = require('./tenant');
const { createParties } = require('./party');

module.exports = () => {
  const tenants = createTenants(3);
  const data = {
    users: createUsers(10),
    tenants,
    parties: createParties(5, tenants)
  };

  return data;
};

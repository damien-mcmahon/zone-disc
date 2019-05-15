const { createUsers } = require('./user');
const { getTenants } = require('./tenant');
const { createParties } = require('./party');

module.exports = () => {
  const tenants = getTenants();
  const data = {
    users: createUsers(10),
    tenants,
    parties: createParties(5, tenants)
  };

  return data;
};

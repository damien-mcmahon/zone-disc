import { createUsers } from './user';
import { createTenants } from './tenant';
import { createParties } from './party';

module.exports = () => {
  const tenants = createTenants(3);
  const data = {
    users: createUsers(10),
    tenants,
    parties: createParties(5, tenants)
  };

  return data;
};

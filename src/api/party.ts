import Faker from 'faker';
import { range } from './utils';

export const createParties = (count:number, tenants: any[]) => range(0,count).map(int => {
    const randTenant = Math.max(0, Math.floor(Math.random() * tenants.length -1));
    const tenant = tenants[randTenant];

    return {
      id: Faker.random.uuid(),
      tenantId: tenant.id
    };
});


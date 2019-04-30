import Faker from 'faker';
import { range } from './utils';

export const createTenants = (count:number) => range(0,count).map(int => {
    const name = Faker.company.companyName();
    const shortCode = name.substr(0,3).split('').map(x => x.toUpperCase()).join('');

    return {
      id: Faker.random.uuid(),
      name,
      shortCode,
    };
});

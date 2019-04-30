import Faker from 'faker';
import { range } from './utils';

export const createUsers = (count:number) => range(0,count).map(int => ({
    id: Faker.random.uuid(),
    name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    roles: [{
    "name": "MAKER"
    }]
}));
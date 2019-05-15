import { getRandomInt } from '../utils';
import Faker from 'faker';

export const PARTY_DETAILS = {
    id: Faker.random.uuid(),
    statusName: 'Active',
    partyName: 'Riverwoods CC',
    primaryContactName: 'Jin Doe',
    networkId: 'DN',
    currencyCode: ['USD'],
    contactDetails: {
        contactType: 'preferred',
        postalAddress: {
            postalAddressLine1: '123 Main Street',
            postalAddressLine2: 'Suburb',
            postalAddressLine3: '',
            city: 'Riverwoods',
            state: 'IL',
            postalCode: '60015',
            country: 'US'
        },
        eAddress: [{
            address: 'info@riverwoodscc.com',
            addressType: 'email'
        }],
        teleAddress: [{
            telecommunicationNumber: '224 0123 3456',
            telecomType: 'phone',
            extension: ''
        }]
    }
};

const STATUSES = ['Active', 'Awaiting Approval', 'Rejected'];
const ACCOUNT_NAMES = ['FIRST DATA CORPORATION', 'ADYEN','WELLS FARGO', 'FDCS/O&M CHASE&FSTFIN','ADYEN CANADA LTD.','GLOBAL PAYMENTS CANADA','SECURE BANCARD'];

export const QUEUE_MOCKS = ACCOUNT_NAMES.map(partyName => ({
    ...PARTY_DETAILS,
    id: Faker.random.uuid(),
    partyName,
    statusName: STATUSES[getRandomInt(0, STATUSES.length-1)] 
}));

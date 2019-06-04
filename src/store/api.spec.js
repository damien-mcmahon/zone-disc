import axios from 'axios';
import * as API from './api';

jest.mock('axios', () => {
    return {
        get: jest.fn(() => {
            return Promise.resolve({data: [{id: '123'}]})
        }),
        post: jest.fn(() => {
            return Promise.resolve({data: [{id: '123'}]})
        }),
        put: jest.fn(() => {
            return Promise.resolve({data: [{id: '123'}]})
        }),
        delete: jest.fn(() => {
            return Promise.resolve({data: [{id: '123'}]})
        }),
    };
});

describe('API', () => {
    describe('GET', () => {
        it('makes a GET request', () => {
            const { GET, options } = API;
            GET('/messages');
            expect(axios.get).toHaveBeenCalledWith('/messages', {...options, params: undefined});
        });

        it('sends the params with the url', () => {
            const { GET, options } = API;
            const params = {someVal: 1};

            GET('/parties', params);

            expect(axios.get).toHaveBeenCalledWith('/parties', {...options, params});
        });

        it('returns only the data', async () => {
            const { GET } = API;
            const data = await GET('/messages');
            expect(data).toEqual([{id: '123'}]);
        });
    });

    describe('POST', () => {
        it('makes a POST request', () => {
            const { POST, options } = API;
            const data = {
                email: 'damien@discover.com',
                password: '12345678'
            };

            POST('/messages', data);
            expect(axios.post).toHaveBeenCalledWith('/messages', {...options, data});
        });
    });

    describe('PUT', () => {
        it('makes a PUT request', () => {
            const { PUT, options } = API;
            const data = {
                email: 'damien@discover.com',
                password: '12345678'
            };

            PUT('/messages', data);
            expect(axios.put).toHaveBeenCalledWith('/messages', {...options, data});
        });
    });

    describe('DELETE', () => {
        it('makes a DELETE request', () => {
            const { DELETE, options } = API;
            DELETE('/messages');
            expect(axios.delete).toHaveBeenCalledWith('/messages', {...options});
        });
    });
});

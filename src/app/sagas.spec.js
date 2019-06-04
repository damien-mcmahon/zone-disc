import { recordSaga } from '../test-helpers';
import * as AppActions from './actions';
import * as AppSagas from './sagas';
import { GET } from '../store/api';
import Cookie from 'js-cookie';

jest.mock('../store/api.js');
jest.mock('js-cookie')

describe('App Sagas', () => {

    describe('setProfileCookie', () => {
        it('successfully sets the cookie', async () => {
            await recordSaga(AppSagas.setProfileCookie, {});
            expect(Cookie.set).toHaveBeenCalledWith('dn__user', '123456789');
        });

        it('dispatched and event when cookie is set', async () => {
            Cookie.set.mockImplementation(() => true);
            const dispatched = await recordSaga(AppSagas.setProfileCookie, {});
            expect(dispatched).toContainEqual(AppActions.setCookieSuccess());
        });

        it('throws an error action correctly', async () => {
            const error = 'An Error Occurred';
            Cookie.set.mockImplementation(() => {throw new Error(error)});
            const dispatched = await recordSaga(AppSagas.setProfileCookie, {});
            expect(dispatched).toContainEqual(AppActions.setCookieError(new Error(error)));
        });
    });

    describe('getInitialData', () => {
        const MOCK_DATA = {
            countries: [{}],
            currencies: [{}],
            states: [{}],
            networks: [{}]
        };

        it('returns back the config data from the server', async () => {

            GET.mockImplementation(path => {
                const key = path.replace('/', '');
                return {
                    [key]: MOCK_DATA[key]
                }
            });

            const dispatched = await recordSaga(AppSagas.getInitialData,{});

            expect(dispatched)
                .toContainEqual(AppActions.getInitialDataSuccess(MOCK_DATA));
        });

        it('throws an error when a bad response received', async () => {
            const error = 'Something went wrong';
            GET.mockImplementation(() => { throw new Error(error);});
            const dispatched = await recordSaga(AppSagas.getInitialData, {});

            expect(dispatched)
                .toContainEqual(AppActions.getInitialDataError(new Error(error)));
        });
    });

    describe('getQueue', () => {
        const PARTIES = [{partyName: 'AA Acquirer'}, {partyName: 'BB Issuer'}];

        it('returns back the queue from the server', async () => {
            GET.mockImplementation(() => ({
                queue: PARTIES
            }));
            
            const dispatched = await recordSaga(AppSagas.getQueue, {});
            expect(dispatched).toContainEqual(AppActions.getQueueDataSuccess(PARTIES));
        });

        it('throws an error on a bad response', async () => {
            const error = 'Something went wrong';
            GET.mockImplementation(() => { throw new Error(error);});
            const dispatched = await recordSaga(AppSagas.getQueue, {});

            expect(dispatched)
                .toContainEqual(AppActions.getQueueDataError(new Error(error)));

        });
    });
});
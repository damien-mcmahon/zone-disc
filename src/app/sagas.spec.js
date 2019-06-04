import { recordSaga } from '../test-helpers';
import * as AppActions from './actions';
import * as AppSagas from './sagas';
import { GET } from '../store/api';
jest.mock('../store/api.js');

describe('App Sagas', () => {
    describe('getInitialData', () => {
        const MOCK_DATA = {
            countries: [{}],
            currencies: [{}],
            states: [{}],
            networks: [{}]
        };

        beforeEach(() => {
            jest.resetAllMocks();
        });

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
        })

    });
});
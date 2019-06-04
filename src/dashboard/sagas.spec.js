import { recordSaga } from '../test-helpers';
import * as sagas from './sagas';
import * as actions from './actions';
import { GET } from '../store/api';

jest.mock('../store/api');

describe('Dashboard Sagas', () => {

    describe('searchPartiesSaga', () => {
        const { searchPartiesSaga } = sagas;
        const { searchParties, searchPartiesSuccess, searchPartiesError } = actions;
        const PARTIES = [{partyName: 'AA'}, {partyName: 'success'}, {partyName: 'super'}]

        it('calls the API with the correct params', async () => {
            await recordSaga(searchPartiesSaga, searchParties('test'));
            expect(GET).toHaveBeenCalledWith('/parties', {'partyName_like': 'test'})
        });

        it('returns a list of filtered parties successfully', async () => {
            GET.mockImplementation(() => ({ parties: PARTIES }));

            const dispatched = await recordSaga(searchPartiesSaga, searchParties('success'));

            //TODO - This is too messy
            const expectation = searchPartiesSuccess([PARTIES[1]]);
            expect(dispatched[0]).toEqual(expectation);
        });
        
        it('throws an error on a bad response', async () => {
            const error = 'Something went wrong';
            GET.mockImplementation(() => { throw new Error(error);});
            const dispatched = await recordSaga(searchPartiesSaga, searchParties('error'));

            expect(dispatched)
                .toContainEqual(searchPartiesError(new Error(error)));

        });
    });
});


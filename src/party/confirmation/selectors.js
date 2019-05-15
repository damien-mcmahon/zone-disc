import { createSelector } from 'reselect';

const partiesSelector = state => state.app.parties;

export const newestPartySelector = createSelector(
    partiesSelector,
    (parties) => {
        return parties[parties.length -1];
    }
)
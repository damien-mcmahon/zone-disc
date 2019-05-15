import { createSelector } from 'reselect';

import { partiesSelector } from 'app/selectors';

export const newestPartySelector = createSelector(
    partiesSelector,
    (parties) => {
        return parties[parties.length -1];
    }
)
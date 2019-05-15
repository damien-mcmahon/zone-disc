import { createSelector } from 'reselect';

import { partiesSelector } from 'app/selectors';

export const newestPartySelector = createSelector(
    partiesSelector,
    (parties) => {
        return parties[parties.length -1];
    }
);

export const queueItemsSelector = createSelector(
    partiesSelector,
    parties => parties.length
);
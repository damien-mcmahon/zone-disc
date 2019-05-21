import { createSelector } from 'reselect';

import { userQueueSelector } from 'dashboard/selectors';

export const newestPartySelector = createSelector(
    userQueueSelector,
    (parties) => parties[parties.length -1]
);

export const queueItemsSelector = createSelector(
    userQueueSelector,
    parties => parties.length
);
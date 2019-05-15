import { createSelector } from 'reselect';

import { partiesSelector, tenantSelector } from 'app/selectors';

export const userQueueSelector = createSelector(
    tenantSelector,
    partiesSelector,
    (tenant, parties) => {
        return parties.filter(p => p.networkId === tenant);
    }
)
import { createSelector } from 'reselect';

import { partiesSelector, tenantSelector } from 'app/selectors';

export const userQueueSelector = createSelector(
    tenantSelector,
    partiesSelector,
    (tenant, parties) => parties.filter(p => p.networkId === tenant)
)

export const searchResultsSelector = state => state.dashboard.searchResults;
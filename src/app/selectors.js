import { createSelector } from 'reselect';
import { alphabetise, optionise } from 'utils';

export const partiesSelector = state => state.app.parties;
export const tenantSelector = state => state.app.tenant;
export const configSelector = state => state.app.config;
export const currentUserSelector = state => state.app.user;

const label = alphabetise('label');

export const countriesSelector = createSelector(
    configSelector,
    ({countries}) => 
        countries
            .map(optionise('isoCountryName', 'isoCountryCode'))
            .sort(label)
);

export const currenciesSelector = createSelector(
    configSelector,
    ({currencies}) => 
        currencies
            .map(optionise('isoCurrencyName', 'isoCurrencyCode'))
            .sort(label)
);

export const statesSelector = createSelector(
    configSelector,
    ({states}) => 
        Object.keys(states).map(key => ({
            label: states[key],
            value: key
        }))
);

export const networksSelector = createSelector(
    configSelector,
    ({networks}) => 
        networks
            .map(optionise('name', 'shortCode'))
            .sort(label)
);
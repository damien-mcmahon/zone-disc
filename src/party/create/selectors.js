import { createSelector } from 'reselect';

import { configSelector } from 'app/selectors';
import { alphabetise, optionise } from 'utils';

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

export const currentCountryIndexSelector = createSelector(
    configSelector, 
    countriesSelector,
    ({currentCountry}, countries) => countries.findIndex(c => c.value === currentCountry)
)

export const statesSelector = createSelector(
    configSelector,
    ({states}) => 
        Object.keys(states).map(key => ({
            label: states[key],
            value: key
        }))
);
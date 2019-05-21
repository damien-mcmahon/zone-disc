import { createSelector } from 'reselect';
import { countriesSelector, configSelector } from 'app/selectors';

export const currentCountryIndexSelector = createSelector(
    configSelector, 
    countriesSelector,
    ({currentCountry}, countries) => 
        countries.findIndex(c => c.value === currentCountry)
)

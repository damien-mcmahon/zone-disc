import { createSelector } from 'reselect';
import { partiesSelector } from 'app/selectors'; 

export const partyIdFromParamsSelector = (_, props) => {
    if (!props) {
        return '';
    }

    const {match: {params: {id}}} = props;
    return props ? id : '';
}
export const partyInStateSelector = state => state.party.currentParty;

export const currentPartySelector = createSelector(
    partiesSelector,
    partyInStateSelector, 
    partyIdFromParamsSelector,
    (parties, currentParty, id) => currentParty || parties.find(p => p.id === id)
);
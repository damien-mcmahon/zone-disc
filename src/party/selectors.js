import { createSelector } from 'reselect';
import { partiesSelector } from 'app/selectors'; 

const partyIdFromParamsSelector = (_, {match: {params: {id}}}) => id;
export const partyInStateSelector = state => state.party.currentParty;

export const currentPartySelector = createSelector(
    partiesSelector,
    partyInStateSelector, 
    partyIdFromParamsSelector,
    (parties, currentParty, id) => currentParty || parties.find(p => p.id === id)
);
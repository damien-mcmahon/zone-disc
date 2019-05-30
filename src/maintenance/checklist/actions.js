import { createAction } from 'redux-actions';

export const getChecklistInfo = createAction('CHECKLIST.GET', party => party);
export const getChecklistInfoSuccess = createAction('CHECKLIST.GET.SUCCESS', checklist => checklist);
export const getChecklistInfoError = createAction('CHECKLIST.GET.ERROR', err => err);
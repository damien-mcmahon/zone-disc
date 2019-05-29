import { createAction } from 'redux-actions';

export const getChecklistInfo = createAction('CHECKLIST.GET');
export const getChecklistInfoSuccess = createAction('CHECKLIST.GET.SUCCESS', checklist => checklist);
export const getChecklistInfoError = createAction('CHECKLIST.GET.ERROR', err => err);
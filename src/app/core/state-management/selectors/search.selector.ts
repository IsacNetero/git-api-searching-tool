import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../state/global-state';

const searchSelector = createFeatureSelector('search');

export const searchValueSelector = createSelector(searchSelector, (state: GlobalState) => {
    return state.searchState.lastSearchedUser;
});
export const totalResultCountSelector = createSelector(searchSelector, (state: GlobalState) => {
  return state.searchState.searchResult.totalCount;
});

export const usersSelector = createSelector(searchSelector, (state: GlobalState) => {
  return state.searchState.searchResult.users;
});

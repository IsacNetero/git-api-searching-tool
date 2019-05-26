import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../state/global-state';

const listReposSelector = createFeatureSelector('list-repos');

export const userSelector = createSelector(listReposSelector, (state: GlobalState) => {
  return state.listReposState.lastSearchedUser;
});
export const reposSelector = createSelector(listReposSelector, (state: GlobalState) => {
  return state.listReposState.repos;
});

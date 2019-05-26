import {Action} from '@ngrx/store';
import {UserSearchResult} from '../../../features/search/domain/user-search-result';

export enum SearchActionTypes {
    SAVE_LAST_SEARCHED_VALUE= '[SEARCH] saving last searched value',
    SAVE_LAST_FETCHED_USERS= '[SEARCH] saving last fetched users'
}
export class SaveLastSearchedValue implements Action {

  type = SearchActionTypes.SAVE_LAST_SEARCHED_VALUE;
  constructor(public payload: string) {}
}
export class SaveLastFetchedUsers implements Action {
  type: SearchActionTypes.SAVE_LAST_FETCHED_USERS;
  constructor(public payload: UserSearchResult) {}
}
export type SearchAction = SaveLastFetchedUsers | SaveLastFetchedUsers;

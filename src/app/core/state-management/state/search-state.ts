import {UserSearchResult} from '../../../features/search/domain/user-search-result';

export interface SearchState {
  lastSearchedUser: string;
  searchResult: UserSearchResult;
}

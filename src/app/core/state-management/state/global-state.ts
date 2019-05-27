import {ListReposState} from './list-repos-state';
import {SearchState} from './search-state';

export interface GlobalState {

  listReposState: ListReposState;
  searchState: SearchState;
}

const searchInitialState: SearchState = {

  lastSearchedUser: '',
  searchResult: {
    totalCount: 0,
    users: []
  }
};
const listReposInitialState: ListReposState = {
  lastSearchedUser: {
    login: '',
    avatarUrl: '',
    htmlUrl: ''
  },
  repos: []
};

export const initialGlobalState: GlobalState = {
  searchState : searchInitialState,
  listReposState: listReposInitialState
};

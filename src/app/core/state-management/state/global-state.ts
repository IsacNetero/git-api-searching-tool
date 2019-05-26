import {ListReposState} from './list-repos-state';
import {SearchState} from './search-state';

export interface GlobalState {

  listReposState: ListReposState;
  searchState: SearchState;
}

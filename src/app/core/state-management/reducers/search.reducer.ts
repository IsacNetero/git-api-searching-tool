import {GlobalState, initialGlobalState} from '../state/global-state';
import {SearchAction, SearchActionType} from '../actions/search.action';
import {UserSearchResult} from '../../../features/search/domain/user-search-result';

export function searchReducer(state = initialGlobalState, action: SearchAction): GlobalState {

  switch (action.type) {

    case  SearchActionType.SAVE_LAST_SEARCHED_VALUE :

      return {...state, searchState: {...state.searchState, lastSearchedUser: action.payload as string}};

      case SearchActionType.SAVE_LAST_FETCHED_USERS:

      return {
        ...state,
        searchState: {
          ...state.searchState,
          searchResult: {...action.payload as UserSearchResult}
        }
      };
    default :
      return state;
  }
}

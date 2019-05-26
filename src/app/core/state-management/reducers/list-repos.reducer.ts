import {GlobalState, initialGlobalState} from '../state/global-state';
import {ListReposAction, ListReposActionType} from '../actions/list-repos.action';
import {Repo} from '../../../features/list-repos/domain/Repo';
import {User} from '../../../features/search/domain/user';

export function listReposReducer(state = initialGlobalState, action: ListReposAction): GlobalState {

  switch (action.type) {

    case  ListReposActionType.SAVE_LAST_SEARCHED_USER :

      return {
        ...state,
        listReposState: {
          ...state.listReposState,
          lastSearchedUser: {...action.payload as User}
        }
      };

    case ListReposActionType.SAVE_LAST_FETCHED_REPOS :
      return {
        ...state,
        listReposState : {
          ...state.listReposState,
          repos : [...action.payload as Repo[]]
        }
      };
    default :
      return state;
  }
}

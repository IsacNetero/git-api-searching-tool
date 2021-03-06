import {Action} from '@ngrx/store';
import {Repo} from '../../../features/list-repos/domain/Repo';
import {User} from '../../../features/search/domain/user';

export enum ListReposActionType {
    SAVE_LAST_SEARCHED_USER= '[LIST REPOS] Save last searched user',
    SAVE_LAST_FETCHED_REPOS= '[LIST REPOS] Save last fetched repos',
    SEARCH_REPOS_FOR_USER= '[LIST REPOS] Search repos for a user',
    SEARCH_USER= '[LIST REPOS] Search a user by username '
}

export class SaveLastSearchedUser implements Action {

  type =  ListReposActionType.SAVE_LAST_SEARCHED_USER;
  constructor(public payload: User) {}
}

export class SaveLastFetchedRepos implements Action {

  type =  ListReposActionType.SAVE_LAST_FETCHED_REPOS;
  constructor(public payload: Repo[]) {}
}

export class SearchReposForUser implements Action {

  type =  ListReposActionType.SEARCH_REPOS_FOR_USER;
  constructor(public payload: string) {}
}
export class SearchUser implements Action {

  type =  ListReposActionType.SEARCH_USER;
  constructor(public payload: string) {}
}
export type ListReposAction = SaveLastSearchedUser | SaveLastFetchedRepos | SearchReposForUser | SearchUser;

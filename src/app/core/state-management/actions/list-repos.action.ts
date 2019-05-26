import {Action} from '@ngrx/store';
import {Repo} from '../../../features/list-repos/domain/Repo';

export enum ListReposActionType {
    SAVE_LAST_SEARCHED_USER= '[LIST REPOS] Save last searched user',
    SAVE_LAST_FETCHED_REPOS= '[LIST REPOS] Save last fetched repos',
    SEARCH_REPOS_FOR_USER= '[LIST REPOS] Search repos for user'
}

export class SaveLastSearchedUser implements Action {

  type =  ListReposActionType.SAVE_LAST_SEARCHED_USER;
  constructor(public payload: string) {}
}

export class SaveLastFetchedRepos implements Action {

  type =  ListReposActionType.SAVE_LAST_FETCHED_REPOS;
  constructor(public payload: Repo[]) {}
}

export class SearchReposForUser implements Action {

  type =  ListReposActionType.SEARCH_REPOS_FOR_USER;
  constructor(public payload: string) {}
}
export type ListReposAction = SaveLastSearchedUser | SaveLastFetchedRepos | SearchReposForUser;

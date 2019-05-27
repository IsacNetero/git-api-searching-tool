import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {ReposSearchService} from '../../../features/list-repos/services/repos-search.service';
import {
  ListReposActionType,
  SaveLastFetchedRepos,
  SaveLastSearchedUser,
  SearchReposForUser,
  SearchUser
} from '../actions/list-repos.action';
import {Repo} from '../../../features/list-repos/domain/Repo';
import {UserSearchService} from '../../../features/search/services/user-search.service';
import {User} from '../../../features/search/domain/user';
import {UserSearchResult} from '../../../features/search/domain/user-search-result';

@Injectable()
export class ListReposEffect {

  constructor(private actions$: Actions,
              private listReposService: ReposSearchService,
              private userSearchService: UserSearchService) {
  }

  @Effect()
  searchReposEffect = this.actions$.pipe(
    ofType(ListReposActionType.SEARCH_REPOS_FOR_USER),
    switchMap((action: SearchReposForUser) => {

      return this.listReposService.findReposForUsername(action.payload)
        .pipe(
          map((repos: Repo[]) => new SaveLastFetchedRepos(repos))
        );
    }));

  @Effect()
  searchUserEffect = this.actions$.pipe(
    ofType(ListReposActionType.SEARCH_USER),
    switchMap((action: SearchUser) => {

      return this.userSearchService.findUsersWithUsername(action.payload)
        .pipe(
          map((result: UserSearchResult) => {
            const user: User = result.users.find(userP => userP.login === action.payload);
            return new SaveLastSearchedUser(user);
          })
        );
    }));
}

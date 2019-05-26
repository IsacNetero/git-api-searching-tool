import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {ReposSearchService} from '../../../features/list-repos/services/repos-search.service';
import {ListReposActionType, SaveLastFetchedRepos, SearchReposForUser} from '../actions/list-repos.action';
import {Repo} from '../../../features/list-repos/domain/Repo';

@Injectable()
export class ListReposEffect {

  constructor(private actions$: Actions, private listReposService: ReposSearchService) {
  }

  @Effect()
  searchUserEffect = this.actions$.pipe(
    ofType(ListReposActionType.SEARCH_REPOS_FOR_USER),
    switchMap((action: SearchReposForUser) => {

      return this.listReposService.findReposForUsername(action.payload)
        .pipe(
          map((repos: Repo[]) => new SaveLastFetchedRepos(repos))
        );
    }));
}

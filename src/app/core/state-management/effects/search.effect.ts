import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UserSearchService} from '../../../features/search/services/user-search.service';
import {SaveLastFetchedUsers, SearchActionType, SearchUsers} from '../actions/search.action';
import {map, switchMap} from 'rxjs/operators';
import {UserSearchResult} from '../../../features/search/domain/user-search-result';

@Injectable()
export class SearchEffect {

  constructor(private actions$: Actions, private userSearchService: UserSearchService) {
  }

  @Effect()
  searchUsersEffect = this.actions$.pipe(
    ofType(SearchActionType.SEARCH_USERS),
    switchMap((action: SearchUsers) => {
      return this.userSearchService.findUsersWithUsername(action.payload)
        .pipe(
          map((result: UserSearchResult) => new SaveLastFetchedUsers(result))
        );
    }));
}

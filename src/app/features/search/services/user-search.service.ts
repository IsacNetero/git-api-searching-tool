import {Injectable} from '@angular/core';
import {UserSearchResource} from '../resources/user-search.resource';
import {Observable} from 'rxjs';
import {UserSearchResult} from '../domain/user-search-result';
import {map} from 'rxjs/operators';
import {User} from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private userSearchResource: UserSearchResource) {
  }

  findUsersWithUsername(username: string): Observable<UserSearchResult> {

    return this.userSearchResource
      .fetchUsersWithUsername(username)
      .pipe(
        /*
        For the moment the mapping isn't necessary because domain and fetched data have the same structure
        but i did it anyway for future needs
        */
        map(jsonSearchResult => {

          return {
            totalCount: jsonSearchResult.total_count,
            users: jsonSearchResult.items.map(item => {

              return {
                login: item.login,
                avatarUrl: item.avatar_url,
                htmlUrl: item.html_url
              };
            })
          };
        })
      );
  }
}

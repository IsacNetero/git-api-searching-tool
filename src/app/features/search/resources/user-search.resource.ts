import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JsonUserSearchResult} from './json-user-search-result';

@Injectable()
export class UserSearchResource {

  constructor(private httpClient: HttpClient) {}

  fetchUsersWithUsername(username: string): Observable<JsonUserSearchResult> {

    const encodedUserName = encodeURI(username);
    return this.httpClient.get('https://api.github.com/search/users?q=' + encodedUserName);
  }
}

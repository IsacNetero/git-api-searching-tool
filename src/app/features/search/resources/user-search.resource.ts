import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JsonSearchResult} from './json-search-result';

@Injectable()
export class UserSearchResource {

  constructor(private httpClient: HttpClient) {
  }

  fetchUsersWithUsername(username: string): Observable<JsonSearchResult> {

    const encodedUserName = encodeURI(username);
    return this.httpClient.get<JsonSearchResult>('https://api.github.com/search/users?q=' + encodedUserName);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JsonRepo} from './json-repos-search-result';

@Injectable()
export class ReposSearchResource {

  constructor(private httpClient: HttpClient) {}

  fetchReposForUser(username: string): Observable<JsonRepo> {

    const encodedUserName = encodeURI(username);
    return this.httpClient.get('https://api.github.com/users/' + encodedUserName + '/repos');
  }
}

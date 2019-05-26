import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ReposSearchResource {

  constructor(private httpClient: HttpClient) {}

  fetchReposForUser(username: string) {

    const encodedUserName = encodeURI(username);
    return this.httpClient.get('https://api.github.com/users/' + encodedUserName + '/repos');
  }
}

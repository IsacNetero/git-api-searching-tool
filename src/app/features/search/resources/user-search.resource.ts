import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserSearchResource {

  constructor(private httpClient: HttpClient) {}

  fetchUsersWithUsername(username: string) {

    const encodedUserName = encodeURI(username);
    return this.httpClient.get('https://api.github.com/search/users?q=' + encodedUserName);
  }
}

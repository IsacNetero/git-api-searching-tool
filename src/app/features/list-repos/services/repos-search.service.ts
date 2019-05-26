import {Injectable} from '@angular/core';
import {ReposSearchResource} from '../resources/repos-search.resource';
import {Observable} from 'rxjs';
import {Repo} from '../domain/Repo';
import {map} from 'rxjs/operators';
import {JsonRepo} from '../resources/json-repo';

@Injectable({
    providedIn: 'root'
  }
)
export class ReposSearchService {

  constructor(private reposSearchResource: ReposSearchResource) {
  }

  findReposForUsername(username: string): Observable<Repo[]> {

    return this.reposSearchResource
      .fetchReposForUser(username)
      .pipe(
        map((result: JsonRepo[]) => {

          return result.map(jsonRepo => {
              return {
                full_name: jsonRepo.full_name,
                description: jsonRepo.description,
                created_at: jsonRepo.created_at,
                updated_at: jsonRepo.updated_at,
                clone_url: jsonRepo.clone_url,
                html_url: jsonRepo.html_url
              };
            }
          );
        })
      );
  }
}

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
                fullName: jsonRepo.full_name,
                description: jsonRepo.description,
                createdAt: jsonRepo.created_at,
                updatedAt: jsonRepo.updated_at,
                cloneUrl: jsonRepo.clone_url,
                htmlUrl: jsonRepo.html_url
              };
            }
          );
        })
      );
  }
}

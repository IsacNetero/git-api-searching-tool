import {Repo} from '../../../features/list-repos/domain/Repo';
import {User} from '../../../features/search/domain/user';

export interface ListReposState {

  lastSearchedUser: User;
  repos: Repo[];
}

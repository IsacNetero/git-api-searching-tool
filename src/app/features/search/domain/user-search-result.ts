import {User} from './user';

export  interface UserSearchResult {
  totalCount: number;
  users: User[];
}

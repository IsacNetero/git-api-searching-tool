import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {GlobalState} from '../../../core/state-management/state/global-state';
import {SaveLastSearchedValue, SearchUsers} from '../../../core/state-management/actions/search.action';
import {
  searchValueSelector,
  totalResultCountSelector,
  usersSelector
} from '../../../core/state-management/selectors/search.selector';
import {User} from '../domain/user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  users$: Observable<User[]>;
  lastSearchedValue$: Observable<string>;
  totalCount$: Observable<number>;

  constructor(private store: Store<GlobalState>, private router: Router) {
  }

  ngOnInit() {

    this.users$ = this.store.select(usersSelector);
    this.lastSearchedValue$ = this.store.select(searchValueSelector);
    this.totalCount$ = this.store.select(totalResultCountSelector);
  }

  onSearch(username: string) {
    this.store.dispatch(new SaveLastSearchedValue(username));
    this.store.dispatch(new SearchUsers(username));
  }

  onListRepos(username: string) {

    this.router.navigateByUrl('/' + username + '/repos');
  }

}

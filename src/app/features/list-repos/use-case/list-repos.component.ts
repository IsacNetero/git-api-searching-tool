import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {GlobalState} from '../../../core/state-management/state/global-state';
import {reposSelector, userSelector} from '../../../core/state-management/selectors/list-repos.selector';
import {
  SearchReposForUser,
  SearchUser
} from '../../../core/state-management/actions/list-repos.action';
import {User} from '../../search/domain/user';
import {Repo} from '../domain/Repo';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss']
})
export class ListReposComponent implements OnInit {

  currentUser: string;
  repos$: Observable<Repo[]>;
  currentUser$: Observable<User>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<GlobalState>) {
    this.currentUser = activatedRoute.snapshot.paramMap.get('user');
  }

  ngOnInit() {

    this.repos$ = this.store.select(reposSelector);
    this.currentUser$ = this.store.select(userSelector);

    this.currentUser$.subscribe((user: User) => {

      if (!user.login) { // Initial State

        this.store.dispatch(new SearchUser(this.currentUser));
        this.store.dispatch(new SearchReposForUser(this.currentUser));

      }
    });

  }

}

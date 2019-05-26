import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {GlobalState} from '../../../core/state-management/state/global-state';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss']
})
export class ListReposComponent implements OnInit {

  currentUser: string;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<GlobalState>) {
    this.currentUser = activatedRoute.snapshot.paramMap.get('user');
  }

  ngOnInit() {

  }

}

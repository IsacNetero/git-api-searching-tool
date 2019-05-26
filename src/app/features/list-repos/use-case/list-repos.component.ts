import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss']
})
export class ListReposComponent implements OnInit {

  currentUser: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.currentUser = activatedRoute.snapshot.paramMap.get('user');
  }

  ngOnInit() {
  }

}

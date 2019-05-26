import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReposSearchResource} from '../resources/repos-search.resource';
import {resource} from "selenium-webdriver/http";

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss']
})
export class ListReposComponent implements OnInit {

  currentUser: string;

  constructor(private activatedRoute: ActivatedRoute, private repoSearchResource: ReposSearchResource) {
    this.currentUser = activatedRoute.snapshot.paramMap.get('user');
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReposSearchService} from '../services/repos-search.service';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss']
})
export class ListReposComponent implements OnInit {

  currentUser: string;

  constructor(private activatedRoute: ActivatedRoute, private repoSearchService: ReposSearchService) {
    this.currentUser = activatedRoute.snapshot.paramMap.get('user');
  }

  ngOnInit() {
    this.repoSearchService.findReposForUsername(this.currentUser).subscribe(data => console.log(data));
  }

}

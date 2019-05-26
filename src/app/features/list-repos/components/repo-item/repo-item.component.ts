import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent implements OnInit {

  @Input()
  repoName: string;
  @Input()
  repoLink: string;

  ngOnInit() {
  }

}

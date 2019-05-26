import {Component, OnInit} from '@angular/core';
import {UserSearchResource} from "../resources/user-search.resource";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private userSearchResource: UserSearchResource) {
  }

  ngOnInit() {

  }

  onSearch(username: string) {
  }

}

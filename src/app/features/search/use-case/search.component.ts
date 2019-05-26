import {Component, OnInit} from '@angular/core';
import {UserSearchService} from '../services/user-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private userSearchService: UserSearchService) {
  }

  ngOnInit() {

  }

  onSearch(username: string) {
    this.userSearchService.findUsersWithUsername(username).subscribe(data => console.log(data));
  }

}

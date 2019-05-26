import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {GlobalState} from '../../../core/state-management/state/global-state';
import {SaveLastSearchedValue, SearchUsers} from '../../../core/state-management/actions/search.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {
    /*
    this.store.select(searchValueSelector).subscribe(data => console.log(data));
    this.store.select(totalResultCountSelector).subscribe(data => console.log(data));
*/
  }

  onSearch(username: string) {
    this.store.dispatch(new SaveLastSearchedValue(username));
    this.store.dispatch(new SearchUsers(username));

  }

}

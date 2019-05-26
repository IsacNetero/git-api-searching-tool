import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  @Output('onSearch')
  eventEmitter = new EventEmitter<string>();

  ngOnInit() {
  }
  onSubmit(value: string){
    this.eventEmitter.emit(value);
    return false;
  }

}

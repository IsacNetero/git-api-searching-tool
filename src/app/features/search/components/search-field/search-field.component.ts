import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {

  @Output('onSearch')
  eventEmitter = new EventEmitter<string>();

  @Input()
  placeholder: string;

  @Input()
  value: string;
  
  onSubmit(value: string){
    this.eventEmitter.emit(value);
    return false;
  }

}

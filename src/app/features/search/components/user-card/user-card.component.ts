import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent{

  @Input()
  username: string;
  @Input()
  avatarUrl: string;
  @Output('onListRepos')
  eventEmitter = new EventEmitter();

  onListRepos(){
    this.eventEmitter.emit(this.username);
    return false;
  }

}

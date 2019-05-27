import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-expandable-link',
  templateUrl: './expandable-link.component.html',
  styleUrls: ['./expandable-link.component.scss']
})
export class ExpandableLinkComponent {

  isExpanded = false;
  @Input()
  link: string;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

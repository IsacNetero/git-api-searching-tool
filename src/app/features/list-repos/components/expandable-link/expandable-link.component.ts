import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expandable-link',
  templateUrl: './expandable-link.component.html',
  styleUrls: ['./expandable-link.component.scss']
})
export class ExpandableLinkComponent implements OnInit {

  isExpanded = false;
  @Input()
  link: string;

  ngOnInit() {
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

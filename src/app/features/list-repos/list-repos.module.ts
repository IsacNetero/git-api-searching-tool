import {NgModule} from '@angular/core';
import {ListReposComponent} from './use-case/list-repos.component';
import { RepoItemComponent } from './components/repo-item/repo-item.component';
import { ExpandableLinkComponent } from './components/expandable-link/expandable-link.component';
import {CommonModule} from '@angular/common';
import {ReposSearchResource} from './resources/repos-search.resource';

@NgModule({
  declarations: [ListReposComponent, RepoItemComponent, ExpandableLinkComponent],
  imports: [CommonModule],
  providers: [ReposSearchResource]
})
export class ListReposModule {
  
}

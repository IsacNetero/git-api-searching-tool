import {NgModule} from '@angular/core';
import {ListReposComponent} from './use-case/list-repos.component';
import {RepoItemComponent} from './components/repo-item/repo-item.component';
import {ExpandableLinkComponent} from './components/expandable-link/expandable-link.component';
import {CommonModule} from '@angular/common';
import {ReposSearchResource} from './resources/repos-search.resource';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {listReposReducer} from '../../core/state-management/reducers/list-repos.reducer';
import {ListReposEffect} from '../../core/state-management/effects/list-repos.effect';

@NgModule({
  declarations: [ListReposComponent, RepoItemComponent, ExpandableLinkComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('list-repos', listReposReducer),
    EffectsModule.forFeature([ListReposEffect])],
  providers: [ReposSearchResource]
})
export class ListReposModule {
  
}

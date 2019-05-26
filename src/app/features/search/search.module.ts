import {NgModule} from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SearchComponent } from './use-case/search.component';
import { RouterModule } from '@angular/router';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { SharedModule } from '../../shared/shared.module';
import {UserSearchResource} from './resources/user-search.resource';
import {StoreModule} from '@ngrx/store';
import {searchReducer} from '../../core/state-management/reducers/search.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SearchEffect} from '../../core/state-management/effects/search.effect';

@NgModule({

  declarations: [UserCardComponent, SearchComponent, SearchFieldComponent],
  imports: [
    RouterModule,
    SharedModule,
    StoreModule.forFeature('search', searchReducer),
    EffectsModule.forFeature([SearchEffect])
  ],
  providers: [UserSearchResource]
})
export class SearchModule {
}

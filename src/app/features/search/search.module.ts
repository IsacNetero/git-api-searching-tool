import {NgModule} from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SearchComponent } from './use-case/search.component';
import { RouterModule } from '@angular/router';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({

  declarations: [UserCardComponent, SearchComponent, SearchFieldComponent],
  imports: [RouterModule, SharedModule]
})
export class SearchModule {

}

import {NgModule} from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SearchComponent } from './use-case/search/search.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { SearchFieldComponent } from './components/search-field/search-field.component';

@NgModule({

  declarations: [UserCardComponent, SearchComponent, AvatarComponent, SearchFieldComponent],
  imports: [RouterModule]
})
export class SearchModule {

}

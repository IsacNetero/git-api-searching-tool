import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './features/search/use-case/search.component';
import {ListReposComponent} from './features/list-repos/use-case/list-repos.component';

const routes: Routes = [
  {
    path : '',
    component : SearchComponent,
    pathMatch : 'full'
  },
  {
    path : ':user/repos',
    component : ListReposComponent
  },
  {
    path : '**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

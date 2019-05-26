import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './features/search/search.module';
import { ListReposModule } from './features/list-repos/list-repos.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SearchModule,
    ListReposModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

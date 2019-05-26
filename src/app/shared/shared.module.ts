import {NgModule} from '@angular/core';
import {AvatarComponent} from './components/avatar/avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  exports: [AvatarComponent]
})
export class SharedModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgBasicsComponent } from './svg-basics/svg-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgBasicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgBasicsComponent } from './svg-basics/svg-basics.component';
import { D3BasicsComponent } from './d3-basics/d3-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgBasicsComponent,
    D3BasicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

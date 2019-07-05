import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgBasicsComponent } from './svg-basics/svg-basics.component';
import { D3BasicsComponent } from './d3-basics/d3-basics.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {BarChartScalingComponent} from './bar-chart-scaling/bar-chart-scaling.component';
import { TransitionComponent } from './transition/transition.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgBasicsComponent,
    D3BasicsComponent,
    PieChartComponent,
    BarChartComponent,
    BarChartScalingComponent,
    TransitionComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

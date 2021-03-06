import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { TableComponent } from './shared/table.component';
import { TableActionsComponent } from './shared/table-actions.component';

import { NavbarTopComponent } from './shared/navbar-top.component';
import { PanelComponent } from './shared/panel.component';
import { HeadingComponent } from './shared/heading.component';
import { CardComponent } from './shared/card.component';
import { RowComponent } from './shared/row.component';
//import { MorrisLineChartComponent } from './morris-line-chart/morris-line-chart.component';

import { GraphComponent } from './d3/component/graph/graph.component';
import { NodeVisualComponent } from './d3/component/shared/node-visual.component';
import { LinkVisualComponent } from './d3/component/shared/link-visual.component';
import { D3Service } from './d3/d3.service';
import { ZoomableDirective } from './d3/directive/zoomable.directive';
import { DraggableDirective } from './d3/directive/draggable.directive';
import { PolygonVisualComponent } from './d3/component/shared/polygon-visual.components';
import { BarsComponent } from './d3/component/bars/bars.component';
import { D3PolygonsComponent } from './d3/component/graph/d3-polygons.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    TableComponent,
    TableActionsComponent,
    NavbarTopComponent,
    HeadingComponent,
    CardComponent,
    RowComponent,
    LinkVisualComponent,
    PolygonVisualComponent,
    //MorrisLineChartComponent,
    GraphComponent,
    NodeVisualComponent,
    ZoomableDirective,
    DraggableDirective,
    BarsComponent,
    D3PolygonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

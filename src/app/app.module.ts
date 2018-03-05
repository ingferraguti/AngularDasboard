import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { TableComponent } from './shared/table.component';
import { TableActionsComponent } from './shared/table-actions.component';

import { NavbarTopComponent } from './shared/navbar-top.component';
import { PanelComponent } from './shared/panel.component';
import { HeadingComponent } from './heading/heading.component';
import { CardComponent } from './card/card.component';
import { RowComponent } from './row/row.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    TableComponent,
    TableActionsComponent,
    NavbarTopComponent,
    HeadingComponent,
    CardComponent,
    RowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

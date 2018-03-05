import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { TableComponent } from './table/table.component';
import { TableActionsComponent } from './table/table-actions.component';

import { NavbarTopComponent } from './shared/navbar-top.component';
import { PanelComponent } from './shared/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    TableComponent,
    TableActionsComponent,
    NavbarTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input } from '@angular/core';
import { MenuVoice } from '../Interfaces';

@Component({
  selector: 'app-navbar-top',
  template: `
  <nav class="navbar navbar-default navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">{{brand}}</a>
        <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span></button>
      </div>
      <div
          class="collapse navbar-collapse" id="navcol-1">
          <ul *ngFor="let m of topMenu" class="nav navbar-nav navbar-right">
              <li role="presentation"><a href="{{m.path}}">{{m.title}}</a></li><!-- class="active" -->
          </ul>
          <ul *ngFor="let side of sideMenu" class="nav navbar-nav side-nav">
              <li role="presentation"><a href="{{side.path}}">{{side.title}}</a></li><!-- class="active" -->
          </ul>
      </div>
    </div>
</nav>
  `
})
export class NavbarTopComponent {

  @Input() brand: string;
  @Input() topMenu: MenuVoice[];
  @Input() sideMenu: MenuVoice[];
  
  constructor() { }

 
}

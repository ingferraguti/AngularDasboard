import { Component, OnInit, Input } from '@angular/core';
import { MenuVoice } from './Interfaces';

@Component({
  selector: 'app-heading',
  template: `
  <h1>{{title}}</h1>
  <ol class="breadcrumb">
    <li><a><span>Home</span></a></li>
    <li><a><span>Library</span></a></li>
    <li><a><span>Data</span></a></li>
  </ol>`
})
export class HeadingComponent implements OnInit {

  @Input() title:string;
  @Input() breadcrumbs:MenuVoice[];

  constructor() { }

  ngOnInit() {  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
  <h1>Dashboard</h1>
  <ol class="breadcrumb">
    <li><a><span>Home</span></a></li>
    <li><a><span>Library</span></a></li>
    <li><a><span>Data</span></a></li>
  </ol>`
})
export class HeadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

}

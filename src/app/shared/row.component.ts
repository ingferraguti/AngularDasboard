import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  template: `
  <div class="row">
    <ng-content></ng-content>
  </div>`
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

}

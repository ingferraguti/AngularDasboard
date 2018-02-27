import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'matteferrag-panel',
  template: `<div class="panel panel-default">
  <div class="panel-heading">
      <h3 class="panel-title">{{title}} </h3>
  </div>
  <div class="panel-body">
      <ng-content></ng-content>
  </div>
</div>`
})

export class PanelComponent implements OnInit {
 
  @Input() title: string;

  constructor() { }

  ngOnInit() {  }

}

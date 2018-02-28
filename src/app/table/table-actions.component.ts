import { Component, OnInit, Input } from '@angular/core';
import { TableAction } from './TableAction';

@Component({
  selector: 'matteferrag-table-actions',
  template: `
  <div class="btn-group" role="group">
    <button *ngFor="let a of actions" class="btn btn-{{a.color}} btn-xs" type="button" style="margin:1px;"> <i class="glyphicon glyphicon-{{a.glyphicon}}"></i></button>
  </div>
`
})
export class TableActionsComponent implements OnInit {

  @Input() actions: TableAction[];

  constructor() { }

  ngOnInit() {
  }

}

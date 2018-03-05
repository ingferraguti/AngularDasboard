import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableAction, TableHeading, TableEvent } from './Interfaces';

@Component({
  selector: 'matteferrag-table-actions',
  template: `
  <div class="btn-group" role="group">
    <button *ngFor="let a of actions" 
      class="btn btn-{{a.color}} btn-xs" 
      (click)="buttonclick(a)"
      type="button" 
      style="margin:1px;"> 
        <i class="glyphicon glyphicon-{{a.glyphicon}}"></i>
    </button>
  </div>
`
})
export class TableActionsComponent {

  @Input() actions: TableAction[];
  @Input() row: Object;
  @Output() action: EventEmitter<TableEvent> = new EventEmitter<TableEvent>();

  constructor() { }

  buttonclick(a){
    return this.action.emit({
      'action':a,
      'row':this.row
    })
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { TableAction, TableEvent } from './TableModel';

@Component({
  selector: 'matteferrag-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  
  @Input() tableClass : string[];
  @Input() data : Object[];
  @Input() heading : string[];
  @Input() tableRowActions : Object[];
  @Input() actions : TableAction[];

  constructor() { }

  action(e: TableEvent){
    console.log(e);
  }
}

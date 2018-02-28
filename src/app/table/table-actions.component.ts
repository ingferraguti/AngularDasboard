import { Component, OnInit, Input } from '@angular/core';
import { TableAction } from './TableAction';

@Component({
  selector: 'matteferrag-table-actions',
  template: ''
})
export class TableActionsComponent implements OnInit {

  @Input() actions: TableAction[];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'matteferrag-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  
  @Input() tableClass : string[];
  @Input() data : Object[];
  @Input() heading : string[];
  @Input() tableRowActions : Object[];

  constructor() { }

  ngOnInit() {
  }

}

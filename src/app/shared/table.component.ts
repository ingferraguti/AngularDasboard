import { Component, OnInit, Input } from '@angular/core';
import { TableAction, TableEvent } from './Interfaces';

@Component({
  selector: 'matteferrag-table',
  template: `
  <div class="table-responsive">
  <table class="table" [ngClass] ="tableClass">
    <thead>
      <tr>
          <th *ngFor="let h of heading">{{h}}</th>
          <th></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let obj of data">
          <td *ngFor="let h of heading" >{{obj[h]}}</td>
          <td>
            <matteferrag-table-actions 
              [actions]="actions"
              [row]="obj"
              (action)="action($event)">
            </matteferrag-table-actions>
          </td>
      </tr>
    </tbody>
  </table>
</div>`
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

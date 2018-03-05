import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() color:string;
  @Input() icon:string;
  @Input() title:string;
  @Input() text:string;
  @Input() value:string;
  @Input() path:string;
  constructor() { }

  ngOnInit() {
  }

}

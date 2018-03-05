import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div class="panel panel-default panel-{{color}}">
    <div class="panel-heading">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><i class="{{icon}}" style="font-size:60px;"></i></div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
                <div class="huge"><span>{{value}} </span></div>
                <div><span>{{title}}</span></div>
            </div>
        </div>
    </div>
    <div class="panel-body"><span class="pull-left">{{text}}</span><span class="pull-right"><i class="glyphicon glyphicon-circle-arrow-right"></i> </span></div>
  </div>
  `
  
})
export class CardComponent implements OnInit {

  @Input() color:string;
  @Input() icon:string;
  @Input() title:string;
  @Input() text:string;
  @Input() value:string;
  @Input() path:string;

  constructor() { }

  ngOnInit() {  }

}

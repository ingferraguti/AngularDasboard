import { Component } from '@angular/core';
import { TableComponent } from './shared/table.component';
import { MenuVoice } from './shared/Interfaces';

import APP_CONFIG from './app.config';
import { Node, Link } from './d3/model/D3Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  menuTop=new Array<MenuVoice>(
      {
        "title":"First item",
        "path":"#"
      },
      {
        "title":"Second item",
        "path":"#"
      }
  );

  sideTop=new Array<MenuVoice>(
    {
      "title":"First side item",
      "path":"#"
    },
    {
      "title":"Second side item",
      "path":"#"
    }
);

  headingexample=["col1","col2","col3","col4"];

  exampletabledata=[
    {
      "col1":"qwweww",
      "col2":"qwwdgww",
      "col3":"qw355w",
      "col4":"qwweww"
    },{
      "col1":"q34eww",
      "col2":"qwwdgww",
      "col3":"qw333w",
      "col5":"qww456w",
      "col4":"qww456w"
    },{
      "col1":"1wweww",
      "col5":"q123dgww",
      "col3":"qw333w",
      "col4":"qww13w"}];

  exampleactions=[
    {
      glyphicon: "search",
      color: "primary"
    },{
      glyphicon: "ok",
      color: "success"
    },{
     
      glyphicon: "pencil",
      color: "warning"
     
    }];





    nodes: Node[] = [];
    links: Link[] = [];
  
    constructor() {

      

      const N = APP_CONFIG.N,
            getIndex = number => number - 1;
  
      /** constructing the nodes array */
      for (let i = 1; i <= N; i++) {
        this.nodes.push(new Node(i));
      }
  
      for (let i = 1; i <= N; i++) {
        for (let m = 2; i * m <= N; m++) {
          /** increasing connections toll on connecting nodes */
          this.nodes[getIndex(i)].linkCount++;
          this.nodes[getIndex(i * m)].linkCount++;
  
          /** connecting the nodes before starting the simulation */
          this.links.push(new Link(i, i * m));
        }
      }
    }










}

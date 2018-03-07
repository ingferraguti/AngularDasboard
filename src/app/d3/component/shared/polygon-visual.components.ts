import { Component, Input } from '@angular/core';
import { Polygon, Point } from '../../model/D3Model';

@Component({
  selector: '[polygonVisual]',
  template: `
    <svg:g>
      <svg:polygon
          class="polygon"
          [attr.points]="polygon.points"
          >
      </svg:polygon>
    </svg:g>
  `,
  styleUrls: ['./style.css']
})
export class PolygonVisualComponent {
  @Input('polygonVisual') polygon: Polygon;
}
/**
 * 
 * 
 * <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.id}}
      </svg:text>


[attr.fill]="node.color"

      {{points(pointsraw)}}



      d3.json("polygons.json", function(data) {
  svg.selectAll("polygon")
    .data(data.Polygons)
    .enter().append("polygon")
    .attr("points",function(d) { 
          return d.points.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
      .attr("stroke","black")
      .attr("stroke-width",2); 
});


 */
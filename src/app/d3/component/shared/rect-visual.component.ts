import { Component, Input } from '@angular/core';
import { Rectangle } from '../../model/D3Model';

@Component({
  selector: '[rectVisual]',
  template: `
    <svg:g>
      <svg:rect
          class="rect"
          [attr.x]="rect.x"
          [attr.y]="rect.y"
          [attr.height]="rect.height"
          [attr.width]="rect.width"
          >
      </svg:rect>
    </svg:g>
  `,
  styleUrls: ['./style.css']
})
export class PolygonVisualComponent {
  @Input('rectVisual') rect: Rectangle;
}
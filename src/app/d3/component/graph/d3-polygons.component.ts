import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import { D3Service } from '../../d3.service'
import { PolygonDraw } from '../../model/D3Model';

@Component({
  selector: 'd3-polygons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
      <g [zoomableOf]="svg">
        <g [polygonVisual]="p"  *ngFor="let p of polygons" ></g>
      </g>
    </svg>
  `
})
export class D3PolygonsComponent implements OnInit, AfterViewInit {

  @Input('polygons') polygons;

  private _options: { width, height } = { width: 400, height: 400 };

  graph: PolygonDraw;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //this.graph.initSimulation(this.options);
  }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getPolygonDraw( this.polygons, this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
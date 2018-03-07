
import { EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import APP_CONFIG from '../../app.config';


// Implementing SimulationNodeDatum interface into our custom Node class
export class Node implements d3.SimulationNodeDatum {
    // optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
  
    id: string;
    linkCount: number = 0;
  
    constructor(id) {
      this.id = id;
    }
  
    normal = () => {
      return Math.sqrt(this.linkCount / APP_CONFIG.N);
    }
  
    get r() {
      return 50 * this.normal() + 10;
    }
  
    get fontSize() {
      return (30 * this.normal() + 10) + 'px';
    }
  
    get color() {
      let index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
      console.log(APP_CONFIG.SPECTRUM[index]);
      return APP_CONFIG.SPECTRUM[index];
     
    }
  }


export interface Point {
  x:number;
  y:number;
}



// Implementing SimulationLinkDatum interface into our custom Link class
export class Link implements d3.SimulationLinkDatum<Node> {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    
    // Must - defining enforced implementation properties
    source: Node | string | number;
    target: Node | string | number;
    
    constructor(source, target) {
        this.source = source;
        this.target = target;
    }
}





export class Polygon  {
  // Optional - defining optional implementation properties - required for relevant typing assistance
  points: string;
  id?: string;
  
  constructor(pt:Point[]) {
      this.points=pt.map(function(d) { return [d.x,d.y].join(","); }).join(" ");;
  }
}



/**
 * 
 * "points",function(d) { 
          return d.points})
 * 
 * 
 * 
 * 
 * */ 













const FORCES = {
    LINKS: 1 / 50,
    COLLISION: 1,
    CHARGE: -1
  }
  
  export class ForceDirectedGraph {
    public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
    public simulation: d3.Simulation<any, any>;
  
    public nodes: Node[] = [];
    public links: Link[] = [];
    public polygons: Polygon[] =[];
  
    constructor(nodes, links, polygons, options: { width, height }) {
      this.nodes = nodes;
      this.links = links;
      this.polygons = polygons;

      this.initSimulation(options);
    }
  
    connectNodes(source, target) {
      let link;
  
      if (!this.nodes[source] || !this.nodes[target]) {
        throw new Error('One of the nodes does not exist');
      }
  
      link = new Link(source, target);
      this.simulation.stop();
      this.links.push(link);
      this.simulation.alphaTarget(0.3).restart();
  
      this.initLinks();
    }
  
    initNodes() {
      if (!this.simulation) {
        throw new Error('simulation was not initialized yet');
      }
  
      this.simulation.nodes(this.nodes);
    }
  
    initLinks() {
      if (!this.simulation) {
        throw new Error('simulation was not initialized yet');
      }
  
      this.simulation.force('links',
        d3.forceLink(this.links)
          .id(d => d['id'])
          .strength(FORCES.LINKS)
      );
    }
  
    initSimulation(options) {
      if (!options || !options.width || !options.height) {
        throw new Error('missing options when initializing simulation');
      }
  
      /** Creating the simulation */
      if (!this.simulation) {
        const ticker = this.ticker;
  
        this.simulation = d3.forceSimulation()
          .force('charge',
            d3.forceManyBody()
              .strength(d => FORCES.CHARGE * d['r'])
          )
          .force('collide',
            d3.forceCollide()
              .strength(FORCES.COLLISION)
              .radius(d => d['r'] + 5).iterations(2)
          );
  
        // Connecting the d3 ticker to an angular event emitter
        this.simulation.on('tick', function () {
          ticker.emit(this);
        });
  
        this.initNodes();
        this.initLinks();
      }
  
      /** Updating the central force of the simulation */
      this.simulation.force('centers', d3.forceCenter(options.width / 2, options.height / 2));
  
      /** Restarting the simulation internal timer */
      this.simulation.restart();
    }
  }
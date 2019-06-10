import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-basics',
  templateUrl: './d3-basics.component.html',
  styleUrls: ['./d3-basics.component.css']
})
export class D3BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //  Mention the import!

    const svg = d3.select('#bay-6')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    svg
      .append('rect')
      .attr('height', '400')
      .attr('width', '400')
      .attr('x', '50')
      .attr('y', '50')
      .attr('style', 'fill:#8aff32;stroke:#45a90a;stroke-width: 5px');
    this.createCircleAt(svg, 125, 125);
    this.createCircleAt(svg, 375, 125);
  }

  private createCircleAt(svg, cx, cy ) {
    svg.append('circle')
      .attr('r', '30')
      .attr('cx', cx)
      .attr('cy', cy)
      .attr('style', 'fill:#ffffff;stroke:#000000;stroke-width: 2px');
  }
}

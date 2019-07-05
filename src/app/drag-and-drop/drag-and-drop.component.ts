import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html'
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const dnd = d3.select('#dnd')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    const rect = dnd.append('rect')
      .attr('id', 'todrag')
      .attr('x', 50)
      .attr('y', 50)
      .attr('width', 50)
      .attr('height', 50)
      .attr('fill', 'lime');

    const dragHandler = d3.drag()
      .on('drag', () => {
        d3.select('#todrag')
          .attr('x', d3.event.x - 25)
          .attr('y', d3.event.y - 25);
      });

    dragHandler(dnd.selectAll('#todrag') as any);
  }

}

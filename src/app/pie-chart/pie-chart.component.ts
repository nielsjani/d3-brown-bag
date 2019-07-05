import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const gForPie = d3.select('#pie')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)
      .append('g')
      .attr('transform', 'translate(150,150)'); //  Translate due to nature of circles in svg

    this.createTooltip();

    const pieArc: any = d3.arc()
      .outerRadius(100)
      .innerRadius(0);

    const pie: any = d3.pie()
      .startAngle(-1.2 * Math.PI) // Default starting pos is at 0°
      .padAngle(0) // add spaces between pie charts. Between 0 - 1
      .value((d: any) => d.value)
      .sort(this.sortPieParts()); //  Default sorted from big to small

    const arcs = gForPie
      .selectAll()
      .data(pie(this.getPieData()))
      .enter()
      .append('path')
      .attr('d', pieArc)
      .style('fill', (x: any) => x.data.color);

    this.addHoverFunction(arcs);

  }

  private createTooltip() {
    d3.select('#pie')
      .append('div')
      .style('opacity', 0)
      .style('display', 'none')
      .attr('id', 'tooltip');

    d3.select('#tooltip')
      .append('p')
      .attr('id', 'tooltipText');
  }

  getPieData() {
    return [
      {'label': 'the sky', value: 0.6, color: 'rgb(49,127,255)'},
      {'label': 'the part of the pyramid that\'s in the sun', value: 0.3, color: '#ffd36c'},
      {'label': 'the part of the pyramid that\'s in the shade', value: 0.1, color: '#b99655'}
    ];
  }

  private sortPieParts() {
    return (x: any, y) => {
      if (x.color === '#ffd36c') {
        return -10;
      }
      if (x.color === '#b99655') {
        return 0;
      }
      return 10;
    };
  }

  private addHoverFunction(arcs: any) {
    arcs
      .on('mouseover', (data) => {
        d3.select('#tooltipText').html('This is ' + data.data.label);
        this.showTooltip();
      })
      .on('mousemove', () => this.moveTooltip((d3.event.pageX), (d3.event.pageY - 50)))
      .on('mouseout', () => this.hideTooltip())
    ;
  }

  showTooltip() {
    d3.select('#tooltip')
      .transition()
      .duration(500)
      .style('display', 'block')
      .style('position', 'absolute')
      .style('opacity', 1);
  }

  hideTooltip() {
    d3.select('#tooltip')
      .transition()
      .duration(500)
      .style('opacity', 0)
      .style('display', 'none');
  }

  moveTooltip(xPosition: number, yPosition: number) {
    d3.select('#tooltip')
      .style('top', yPosition + 'px')
      .style('left', xPosition + 'px');
  }
}

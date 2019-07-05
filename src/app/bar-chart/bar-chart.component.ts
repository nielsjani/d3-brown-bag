import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {svg} from 'd3';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {

  private _svgHeight = 250;

  constructor() {
  }

  ngOnInit() {
    const svgWidth = 500;
    const padding = 2;
    const dataset = [{score: 5, text: 'HP', color: 'red'},
      {score: 10, text: 'Attack', color: 'orange'},
      {score: 16, text: 'Defense', color: 'yellow'},
      {score: 30, text: 'Special Attack', color: 'blue'},
      {score: 40, text: 'Special Defense', color: 'green'},
      {score: 50, text: 'Speed', color: 'pink'},
      {score: 151, text: 'Total', color: 'black'},
    ];

    const gForBars = d3.select('#bar-chart')
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', this._svgHeight)
      .append('g');

    gForBars.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', this.getBarX(svgWidth, dataset)) // evenly space bars over svg
      .attr('y', data => this.getBarY(data, this._svgHeight)) // because svg 0,0 is at top left corner, we need to set the vertical starting point of a bar like this
      .attr('width', (svgWidth / dataset.length) - padding) // determine width of a single bar based on the width of the svg and the total number of bars. 2px padding between bars
      .attr('height', data => data.score)
      .attr('fill', data => data.color);

    gForBars.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(d => d.text)
      .attr('text-anchor', 'middle')
      .attr('font-size', 10)
      .attr('x', (data, index) => this.getWidthOfPrevisouslyDrawnBars(index, svgWidth, dataset) + this.getWidthOfHalfABar(svgWidth, dataset, padding))
      .attr('y', data => this.getBarY(data, this._svgHeight) - 10);
  }

  private getWidthOfHalfABar(svgWidth: number, dataset, padding: number) {
    return (svgWidth / dataset.length - padding) / 2;
  }

  private getWidthOfPrevisouslyDrawnBars(index, svgWidth: number, dataset) {
    return index * (svgWidth / dataset.length);
  }

  private getBarX(svgWidth: number, dataset) {
    return (data, index) => index * (svgWidth / dataset.length);
  }

  private getBarY(data, svgHeight: number) {
    return svgHeight - data.score;
  }

}

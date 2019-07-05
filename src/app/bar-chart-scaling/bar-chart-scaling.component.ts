import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {svg} from 'd3';


@Component({
  selector: 'app-bar-chart-scaling',
  templateUrl: './bar-chart-scaling.component.html'
})
export class BarChartScalingComponent implements OnInit {

  private _svgHeight = 250;

  constructor() {
  }

  ngOnInit() {
    const svgWidth = 500;
    const padding = 2;

    const gForBars = d3.select('#bar-chart-scaling')
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', this._svgHeight)
      .append('g');

    //  real stats
    //  https://bulbapedia.bulbagarden.net/wiki/Chansey_(Pok%C3%A9mon)
    const dataset = [{score: 250, text: 'HP', color: 'red'},
      {score: 5, text: 'Attack', color: 'orange'},
      {score: 5, text: 'Defense', color: 'yellow'},
      {score: 35, text: 'Special Attack', color: 'blue'},
      {score: 105, text: 'Special Defense', color: 'green'},
      {score: 50, text: 'Speed', color: 'pink'},
      {score: 450, text: 'Total', color: 'black'},
    ];

    const scaleLinear = d3.scaleLinear()
      .domain([0, 780]) //  lowest and highest value numbers you'll pass to the function. aka the score  .highest total base stat is 780 for mega mewtwo x/y and Mega Rayquaza
      .range([0, this._svgHeight] as any); // what he should map those passed in numbers to. Eg: 780 will be mapped to svgHeight, 390 (half of 780) will be mapped to svgHeight/2

    gForBars.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', this.getBarX(svgWidth, dataset))
      .attr('y', data => this.getBarY(scaleLinear(data.score), this._svgHeight))
      .attr('width', (svgWidth / dataset.length) - padding)
      .attr('height', (data) => scaleLinear(data.score))
      .attr('fill', data => data.color);

    gForBars.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(d => d.text)
      .attr('text-anchor', 'middle')
      .attr('font-size', 10)
      .attr('x', (data, index) => index * (svgWidth / dataset.length) + (svgWidth / dataset.length - padding) / 2)
      .attr('y', data => this.getBarY(scaleLinear(data.score), this._svgHeight) - 10);
  }

  private getBarX(svgWidth: number, dataset) {
    return (data, index) => index * (svgWidth / dataset.length);
  }

  private getBarY(scaledHeightOfBar, svgHeight: number) {
    return svgHeight - scaledHeightOfBar;
  }

}

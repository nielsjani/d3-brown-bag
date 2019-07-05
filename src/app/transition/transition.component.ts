import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html'
})
export class TransitionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const transitionFade = d3.select('#transition-fade')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);
    this.createFadeRect(transitionFade);
    this.createCallbackRect(transitionFade);
    this.createGreenRect(transitionFade);

    this.transitionFade();
    this.transitionCallback(490)();
    this.transitionGreen(90)();
  }

  private createFadeRect(transitionFade) {
    transitionFade
      .append('rect')
      .attr('id', 'tofade')
      .attr('x', 50)
      .attr('y', 50)
      .attr('width', 50)
      .attr('height', 50)
      .attr('fill', 'blue');
  }

  private createCallbackRect(transitionFade) {
    transitionFade
      .append('rect')
      .attr('id', 'tomove')
      .attr('x', 100)
      .attr('y', 50)
      .attr('width', 50)
      .attr('height', 50)
      .attr('fill', 'red');
  }

  private createGreenRect(transitionFade) {
    transitionFade
      .append('rect')
      .attr('id', 'green')
      .attr('x', 100)
      .attr('y', 100)
      .attr('width', 50)
      .attr('height', 50)
      .attr('fill', 'green');
  }

  private transitionFade() {
    const transition = d3.transition()
      .duration(10000)
      .ease(d3.easeLinear);

    d3.select('#tofade')
      .transition(transition)
      .style('opacity', 0);

  }

  private transitionCallback(number: number) {
    return () => {
      const transition = d3.transition()
          .duration(1000)
          .ease(d3.easeLinear)
        //  .ease(d3.easeElastic)
        //  .ease(d3.easeBack)

      ;

      d3.select('#tomove')
        .transition(transition)
        .attr('x', number)
        .on('end', this.transitionCallback(number === 490 ? 50 : 490));
    };
  }

  private transitionGreen(amount) {
    return () => {
      const transition = d3.transition()
        .duration(500)
        .ease(d3.easeLinear);

      d3.select('#green')
        .transition(transition)
        .attr('transform', 'rotate(' + amount + ')')
        .on('end', this.transitionGreen(amount + 90));
    };
  }

  stopGreen() {
    d3.select('#green').interrupt();
  }
}

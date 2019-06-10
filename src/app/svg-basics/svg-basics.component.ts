import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-basics',
  templateUrl: './svg-basics.component.html',
  styleUrls: ['./svg-basics.component.css']
})
export class SvgBasicsComponent implements OnInit {

  fill: '#8aff32';
  stroke: '#45a90a';

  constructor() { }

  ngOnInit() {
  }
}

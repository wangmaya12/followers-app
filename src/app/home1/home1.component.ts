import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  myarchives = [
    { year: 2019, month: 1 },
    { year: 2019, month: 2 },
    { year: 2019, month: 3 }
  ];
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-fordemo',
  templateUrl: './ng-fordemo.component.html',
  styleUrls: ['./ng-fordemo.component.css']
})
export class NgFordemoComponent implements OnInit {

  constructor() { }

  data = [
    {
      Name : "Ushank",
      isonline : true
    },
    {
      Name : "Raj",
      isonline : false
    },
    {
      Name : "Ashish",
      isonline : true
    },
    {
      Name : "Ushank",
      isonline : true
    },
    {
      Name : "Raj",
      isonline : false
    },
    {
      Name : "Ashish",
      isonline : true
    }
  ]
  ngOnInit(): void {
  }

}

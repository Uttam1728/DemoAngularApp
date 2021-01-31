import { RecordsService } from './../records.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-fordemo',
  templateUrl: './ng-fordemo.component.html',
  styleUrls: ['./ng-fordemo.component.css']
})
export class NgFordemoComponent implements OnInit {

  constructor(private _recordService: RecordsService) { 

  }

  data = [];

  ngOnInit(): void {
    this._recordService.getData()
    .subscribe(record => this.data = record.obj)
  }

}

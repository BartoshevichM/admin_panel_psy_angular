import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  displayedColumns: string[] = ['position', 'client', 'time'];
  dataSource = new MatTableDataSource();
  arrSource = [
    {position: 1, client: 'client 1', time: '12:30 - 13:30'},
    {position: 2, client: 'client 2', time: '14:30 - 15:30'},
    {position: 3, client: 'client 3', time: '18:00 - 19:00'}
  ];

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.arrSource; //get from db
  }

}

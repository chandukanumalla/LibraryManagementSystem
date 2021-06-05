import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booksdashboard',
  templateUrl: './booksdashboard.component.html',
  styleUrls: ['./booksdashboard.component.css']
})
export class BooksdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('won')
  }

}

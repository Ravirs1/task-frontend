import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  items = [
    'Location', 'Organisation','Users', 'Catering', 'Finance','Events'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

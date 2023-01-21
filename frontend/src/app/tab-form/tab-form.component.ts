import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-tab-form',
  templateUrl: './tab-form.component.html',
  styleUrls: ['./tab-form.component.css']
})
export class TabFormComponent implements OnInit {

  LocationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    file: new FormControl(''),
    class: new FormControl(''),
    type: new FormControl('')
  });

  tabs = ['Location Details', 'Room Layout', 'Unavaibility'];
  selected = new FormControl(0);




  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addTab(result) {
    this.tabs.push(result);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.addTab(result)
    });
  }

  save() {
    console.log(JSON.stringify(this.LocationForm.value));
  }

}

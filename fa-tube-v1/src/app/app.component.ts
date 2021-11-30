import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ui-component';
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  constructor(public dialog: MatDialog) {}
}

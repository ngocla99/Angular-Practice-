import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataStoreService } from 'src/app/service/data-store.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent implements OnInit {
  search = new FormControl();
  value!: string;
  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit(): void {
    this.search.valueChanges.subscribe((value) => {
      const input = value.toLowerCase();
      this.dataStoreService.inputSearchChanged.next(input);
    });
  }

  onSearch(input: string) {}
}

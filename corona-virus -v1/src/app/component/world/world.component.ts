import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/service/data-store.service';
import { DataCorona } from 'src/app/shared/model/data-corona.model';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent implements OnInit {
  dataWorld!: DataCorona;
  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit(): void {
    this.dataStoreService.getDataWorld().subscribe(
      (data) => {
        this.dataWorld = data;

        this.dataWorld.fatalityRate =
          (this.dataWorld.deaths / this.dataWorld.confirmed) * 100;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}

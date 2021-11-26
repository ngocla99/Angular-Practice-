import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/service/corona-virus.service';
import { DataStoreService } from 'src/app/service/data-store.service';
import { DataRegional } from 'src/app/shared/model/data-corona.model';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.css'],
})
export class RegionalComponent implements OnInit {
  dataRegions: DataRegional[] = [];
  currentRegion!: DataRegional;
  constructor(
    private dataStoreService: DataStoreService,
    private coronaService: CoronaService
  ) {}

  ngOnInit(): void {
    this.dataStoreService.getDataCountries().subscribe(
      () => {
        this.dataRegions = this.coronaService.getDataRegions();
        this.currentRegion = this.coronaService.getDataRegion('Vietnam');
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  onGetDataRegion(region: DataRegional) {
    this.currentRegion = this.coronaService.getDataRegion(region.countryregion);
    this.coronaService.regionChanged.next(region);
  }
}

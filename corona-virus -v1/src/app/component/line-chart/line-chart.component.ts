import { Component, OnDestroy, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CoronaService } from 'src/app/service/corona-virus.service';
import { DataStoreService } from 'src/app/service/data-store.service';
import { DataLineChart } from 'src/app/shared/model/data-chart.model';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnDestroy {
  regionSub!: Subscription;
  multi: DataLineChart[] = [];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  below = LegendPosition.Below;
  constructor(
    private dataStoreService: DataStoreService,
    private coronaService: CoronaService
  ) {}

  ngOnInit(): void {
    this.dataStoreService.getTimeSeriesCountry('VN').subscribe(
      (dataRegion) => {
        this.multi = this.multi =
          this.coronaService.getDataRegionChart(dataRegion);
      },
      (error) => {
        console.log(error.message);
      }
    );
    this.regionSub = this.coronaService.regionChanged
      .pipe(
        switchMap((region) => {
          return this.dataStoreService.getTimeSeriesCountry(
            region.countrycode.iso2
          );
        })
      )
      .subscribe(
        (dataRegion) => {
          this.multi = this.coronaService.getDataRegionChart(dataRegion);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }

  ngOnDestroy(): void {
    this.regionSub.unsubscribe();
  }
}

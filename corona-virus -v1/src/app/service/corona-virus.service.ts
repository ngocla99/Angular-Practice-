import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataLineChart } from '../shared/model/data-chart.model';
import {
  DataCorona,
  DataRegional,
  DataTimeSeries,
} from '../shared/model/data-corona.model';

@Injectable({
  providedIn: 'root',
})
export class CoronaService {
  dataAvailable = new Subject<DataRegional[]>();
  regionChanged = new Subject<DataRegional>();
  private dataRegionals!: DataRegional[];
  constructor() {}

  setDataRegions(data: DataRegional[]) {
    this.dataRegionals = data;
    return this.dataAvailable.next([...this.dataRegionals]);
  }

  getDataRegions() {
    return [...this.dataRegionals];
  }

  getDataRegion(name: string) {
    const region = this.dataRegionals.filter(
      (data) => data.countryregion === name
    )[0];
    region.fatalityRate = (region.deaths / region.confirmed) * 100;
    return region;
  }

  getRegionOnMap() {
    const locations = this.dataRegionals
      .map((data) => data.location)
      .map((location) => Object.values(location));
    const confirmed = this.dataRegionals.map((data) => data.confirmed);
    const dataRegionOnMap = locations.map((location, index) => {
      location.push(confirmed[index]);
      return location;
    });
    return dataRegionOnMap;
  }

  getDataRegionChart(dataRegion: DataTimeSeries[]): DataLineChart[] {
    const timeSeries = dataRegion.map((item) => item.timeseries)[0];
    const time = Object.keys(timeSeries);
    const data = Object.values(timeSeries) as DataCorona[];
    const confirmedSeries = time.map((date, index) => {
      return {
        name: date,
        value: data[index].confirmed,
      };
    });
    const recoveredSeries = time.map((date, index) => {
      return {
        name: date,
        value: data[index].recovered,
      };
    });
    const deathsSeries = time.map((date, index) => {
      return {
        name: date,
        value: data[index].deaths,
      };
    });
    return [
      {
        name: 'Confirmed',
        series: confirmedSeries,
      },
      {
        name: 'Recovered',
        series: recoveredSeries,
      },
      {
        name: 'Deaths',
        series: deathsSeries,
      },
    ];
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  DataCorona,
  DataRegional,
  DataTimeSeries,
} from '../shared/model/data-corona.model';
import { CoronaService } from './corona-virus.service';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  private httpOptions = {
    headers: new HttpHeaders({ Accept: 'application/json' }),
  };

  private CORONA_URL =
    'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/';
  constructor(private http: HttpClient, private coronaService: CoronaService) {}

  getDataWorld() {
    return this.http
      .get<DataCorona>(this.CORONA_URL + 'jhu-edu/brief', this.httpOptions)
      .pipe(catchError((error) => throwError(error)));
  }

  getDataCountries() {
    return this.http
      .get<DataRegional[]>(
        this.CORONA_URL + 'jhu-edu/latest?onlyCountries=true',
        this.httpOptions
      )
      .pipe(
        tap((data) => this.coronaService.setDataRegions(data)),
        catchError((error) => throwError(error))
      );
  }

  getTimeSeriesCountry(code: string) {
    return this.http
      .get<DataTimeSeries[]>(
        this.CORONA_URL + `jhu-edu/timeseries?iso2=${code}&onlyCountries=true`,
        this.httpOptions
      )
      .pipe(catchError((error) => throwError(error)));
  }
}

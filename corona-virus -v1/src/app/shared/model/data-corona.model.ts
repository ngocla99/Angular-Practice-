export interface Location {
  lat: number;
  lng: number;
}

export interface DataCorona {
  confirmed: number;
  deaths: number;
  recovered: number;
  fatalityRate?: number;
}

export interface DataRegional extends DataCorona {
  countryregion: string;
  countrycode: { iso2: string; iso3: string };
  location: Location;
}

export interface DataTimeSeries {
  countryregion: string;
  lastupdate: string;
  timeseries: any;
}

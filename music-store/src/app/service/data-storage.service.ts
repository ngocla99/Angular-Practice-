import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Artist } from '../shared/model/artist.model';
import { ArtistService } from './artist.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private SPOTIFY_URL = 'https://api.spotify.com';
  private headersOption = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  constructor(
    private http: HttpClient,
    private artistsService: ArtistService
  ) {}

  getArtists(url: string) {
    url = url.trim();
    const artistsURL = `${this.SPOTIFY_URL}/v1/search?q=${url}&type=artist`;
    return this.http
      .get<any>(artistsURL, {
        headers: this.headersOption,
      })
      .pipe(
        tap((res) => {
          const artists = res.artists.items;
          this.artistsService.setArtists(artists);
        }),
        catchError((error) => throwError(error))
      );
  }

  getTracks(id: string) {
    const tracksURL = `${this.SPOTIFY_URL}/v1/artists/${id}/top-tracks`;
    return this.http
      .get<any>(tracksURL, {
        headers: this.headersOption,
        params: new HttpParams().set('market', 'US'),
      })
      .pipe(catchError((error) => throwError(error)));
  }
}

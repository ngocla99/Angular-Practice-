import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Artist } from '../shared/model/artist.model';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  artistsChanged = new Subject<Artist[]>();
  idArtistChanged = new Subject<string>();
  private artists: Artist[] = [];
  constructor() {}

  setArtists(artists: Artist[]) {
    this.artists = artists;
    this.artistsChanged.next([...this.artists]);
  }
}

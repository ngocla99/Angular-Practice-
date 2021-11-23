import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtistService } from '../service/artist.service';
import { Artist } from '../shared/model/artist.model';

@Component({
  selector: 'app-artist-search-result',
  templateUrl: './artist-search-result.component.html',
  styleUrls: ['./artist-search-result.component.css'],
})
export class ArtistSearchResultComponent implements OnInit, OnDestroy {
  artists!: Artist[];
  artistsSub!: Subscription;

  constructor(
    private artistService: ArtistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.artistsSub = this.artistService.artistsChanged.subscribe(
      (artists: Artist[]) => {
        this.artists = artists;
      }
    );
  }

  onGetIdArtist(id: string): void {
    this.artistService.idArtistChanged.next(id);
    this.router.navigate([id], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.artistsSub.unsubscribe();
  }
}

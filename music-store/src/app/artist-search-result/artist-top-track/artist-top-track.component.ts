import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { Track } from 'src/app/shared/model/tracks.model';

@Component({
  selector: 'app-artist-top-track',
  templateUrl: './artist-top-track.component.html',
  styleUrls: ['./artist-top-track.component.css'],
})
export class ArtistTopTrackComponent implements OnInit {
  tracks: Track[] = [];
  constructor(
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const id = params['id'];
          this.tracks = [];
          return this.dataStorageService.getTracks(id);
        })
      )
      .subscribe(
        (res) => {
          const tracks = res.tracks;

          for (let track of tracks) {
            this.tracks.push({
              name: track.album.name,
              type: track.album.type,
              releaseDate: track.album.release_date,
              images: track.album.images,
              previewUrl: track.preview_url ? track.preview_url : null,
            });
          }
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
}

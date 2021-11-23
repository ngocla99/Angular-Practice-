import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/shared/model/artist.model';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
})
export class ArtistDetailComponent implements OnInit {
  @Input() artist!: Artist;
  constructor() {}

  ngOnInit(): void {}
}

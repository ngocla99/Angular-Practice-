import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistSearchResultComponent } from './artist-search-result/artist-search-result.component';
import { ArtistTopTrackComponent } from './artist-search-result/artist-top-track/artist-top-track.component';

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistSearchResultComponent,
    children: [
      {
        path: ':id',
        component: ArtistTopTrackComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

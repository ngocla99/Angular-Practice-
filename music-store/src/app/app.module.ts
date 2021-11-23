import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ArtistSearchResultComponent } from './artist-search-result/artist-search-result.component';
import { ArtistDetailComponent } from './artist-search-result/artist-detail/artist-detail.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { TrackDetailComponent } from './artist-search-result/artist-top-track/track-detail/track-detail.component';
import { ArtistTopTrackComponent } from './artist-search-result/artist-top-track/artist-top-track.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    ArtistSearchResultComponent,
    ArtistDetailComponent,
    ArtistTopTrackComponent,
    TrackDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

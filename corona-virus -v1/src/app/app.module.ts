import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldComponent } from './component/world/world.component';
import { RegionalComponent } from './component/regional/regional.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './component/map/map.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    RegionalComponent,
    MapComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { circle, latLng, MapOptions, tileLayer, Map, LatLng } from 'leaflet';
import { Subscription } from 'rxjs';
import { CoronaService } from 'src/app/service/corona-virus.service';
import { DataRegional } from 'src/app/shared/model/data-corona.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnDestroy {
  mapOptions!: MapOptions;
  regionsSub!: Subscription;
  locationsSub!: Subscription;
  map!: Map;
  layers: any[] = [];

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {
    this.initializeMapOptions();
    this.regionsSub = this.coronaService.dataAvailable.subscribe(() => {
      const regionOnMap = this.coronaService.getRegionOnMap();
      for (let [lat, lng, confirmed] of regionOnMap) {
        this.layers.push(
          circle([lat, lng], { radius: confirmed / 40, color: '#f38f5f' })
        );
      }
    });
    this.locationsSub = this.coronaService.regionChanged.subscribe(
      (region: DataRegional) => {
        const location = region.location;
        this.map.setView(new LatLng(location.lat, location.lng), 3);
      }
    );
  }

  onMapReady(map: Map) {
    this.map = map;
  }

  private initializeMapOptions() {
    this.mapOptions = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; OpenStreetMap contributors',
        }),
      ],
      zoom: 2,
      center: latLng(20, 20),
    };
  }

  ngOnDestroy(): void {
    this.regionsSub.unsubscribe();
    this.locationsSub.unsubscribe();
  }
}

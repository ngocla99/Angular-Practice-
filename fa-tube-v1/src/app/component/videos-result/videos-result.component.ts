import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { ConnectApiService } from 'src/app/service/connect-api.service';
import { DataStoreService } from 'src/app/service/data-store.service';
import { Video } from 'src/app/shared/model/video.model';

@Component({
  selector: 'app-videos-result',
  templateUrl: './videos-result.component.html',
  styleUrls: ['./videos-result.component.css'],
})
export class VideosResultComponent implements OnInit, OnDestroy {
  videos: Video[] = [];
  runVideo!: string;
  currentVideo!: string;
  searchSub!: Subscription;
  videoSub!: Subscription;
  debounceTime!: number;
  constructor(
    private connectApiService: ConnectApiService,
    private dataStoreService: DataStoreService
  ) {}

  ngOnInit(): void {
    this.connectApiService.getVideos().subscribe((videos) => {
      this.videos = videos;
      this.dataStoreService.pageInfoData.next(videos[0].pageInfo);
    });
    this.searchSub = this.dataStoreService.inputSearchChanged
      .pipe(
        debounceTime(1000),
        switchMap((data) => {
          console.log(this.connectApiService.getDebounceTime() * 1000);
          this.connectApiService.setParams('q', data);
          return this.connectApiService.getVideos();
        })
      )
      .subscribe((videos) => {
        this.dataStoreService.pageInfoData.next(videos[0].pageInfo);

        this.videos = videos;
      });

    this.videoSub = this.dataStoreService.videoChanged.subscribe((videos) => {
      this.videos = videos;
    });
  }

  onClick(title: string) {
    this.runVideo = title;
  }

  onShowVideo() {}

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
    this.videoSub.unsubscribe();
  }
}

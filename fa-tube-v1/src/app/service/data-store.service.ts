import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PageInfo, Video } from '../shared/model/video.model';
import { ConnectApiService } from './connect-api.service';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  pageToken = {
    nextPageToken: '',
    prevPageToken: '',
  };

  private pageInfo: PageInfo = {
    totalResults: 0,
    resultsPerPage: 0,
  };

  inputSearchChanged = new Subject<string>();
  orderChanged = new Subject<Video[]>();
  dateChanged = new Subject<Video[]>();
  pageChanged = new Subject<Video[]>();
  videoChanged = new Subject<Video[]>();
  pageInfoData = new BehaviorSubject<PageInfo>({ ...this.pageInfo });

  constructor(private connectApiService: ConnectApiService) {}

  GetNewPage(previousPageIndex: number, pageIndex: number) {
    if (previousPageIndex < pageIndex) {
      this.connectApiService.setParams(
        'pageToken',
        this.connectApiService.pageToken.nextPageToken
      );
    }
    if (previousPageIndex > pageIndex) {
      this.connectApiService.setParams(
        'pageToken',
        this.connectApiService.pageToken.prevPageToken
      );
    }

    this.connectApiService.getVideos().subscribe((videos) => {
      this.videoChanged.next(videos);
    });
  }
}

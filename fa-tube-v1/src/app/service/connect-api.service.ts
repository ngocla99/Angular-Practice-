import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Video } from '../shared/model/video.model';

@Injectable({
  providedIn: 'root',
})
export class ConnectApiService {
  private API_URL = 'https://youtube.googleapis.com/youtube/v3/search';
  private API_KEY = 'AIzaSyCgP0v3-RZTsFFMSZKj8vrCjWNiRaflY9I';
  private HTTP_PARAMS: any = {
    key: this.API_KEY,
    part: 'id,snippet',
    maxResults: '8',
    type: 'video',
    order: 'relevance',
  };
  private httpOptions = {
    headers: new HttpHeaders({ Accept: 'application/json' }),
    params: this.HTTP_PARAMS,
  };
  private debounceTime = 1;

  pageToken = {
    nextPageToken: '',
    prevPageToken: '',
  };

  setParams(key: string, value: string) {
    this.HTTP_PARAMS[key] = value;
  }

  setDebounceTime(time: number) {
    this.debounceTime = time;
  }

  getDebounceTime() {
    return this.debounceTime;
  }

  constructor(private http: HttpClient) {}

  getParams() {
    return { ...this.HTTP_PARAMS };
  }

  getVideos() {
    if (!this.HTTP_PARAMS.q) {
      this.setParams('q', 'lisa');
    }
    return this.http.get<any>(this.API_URL, this.httpOptions).pipe(
      tap((response) => {
        this.pageToken.nextPageToken = response.nextPageToken
          ? response.nextPageToken
          : '';
        this.pageToken.prevPageToken = response.prevPageToken
          ? response.prevPageToken
          : '';
        // this.pageToken.prevPageToken = response.nextPageToken;
      }),
      map((response: any) => {
        return response.items.map((item: any) => {
          return {
            id: item.id.videoId,
            nextPageToken: response.nextPageToken ? response.nextPageToken : '',
            prevPageToken: response.prevPageToken ? response.prevPageToken : '',
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedTime: new Date(item.snippet.publishTime),
            thumbnail: item.snippet.thumbnails.high.url.replace(
              'hqdefault.jpg',
              'mqdefault.jpg'
            ),
            pageInfo: {
              totalResults: response.pageInfo.totalResults,
              resultsPerPage: response.pageInfo.resultsPerPage,
            },
          };
        });
      })
    );
  }
}

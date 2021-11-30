import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConnectApiService } from 'src/app/service/connect-api.service';
import { DataStoreService } from 'src/app/service/data-store.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  items = [
    { order: 'date', icon: 'date_range' },
    { order: 'rating', icon: 'stars' },
    { order: 'relevance', icon: 'bar_chart' },
    { order: 'title', icon: 'title' },
    { order: 'videoCount', icon: 'format_list_numbered_rtl' },
    { order: 'viewCount', icon: 'remove_red_eye' },
  ];

  dateFilter: FormGroup;

  constructor(
    private connectApiService: ConnectApiService,
    private dataStoreService: DataStoreService
  ) {
    this.dateFilter = new FormGroup({
      start: new FormControl(''),
      end: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.dateFilter.valueChanges.subscribe((data) => {
      if (data.start && data.end) {
        let startDate = new Date(
          new Date(data.start + 1).getTime() + 24 * 60 * 60 * 1000
        ).toISOString();
        let endDate = new Date(
          new Date(data.end + 1).getTime() + 24 * 60 * 60 * 1000
        ).toISOString();
        let today = new Date().toISOString();

        if (startDate > today || endDate > today) {
          alert('Please check date!');
          this.dateFilter = new FormGroup({
            start: new FormControl(''),
            end: new FormControl(''),
          });
        } else {
          this.connectApiService.setParams('publishedBefore', endDate);
          this.connectApiService.setParams('publishedAfter', startDate);
          this.connectApiService.getVideos().subscribe((videos) => {
            this.dataStoreService.videoChanged.next(videos);
            this.dataStoreService.pageInfoData.next(videos[0].pageInfo);
          });
        }
      }
    });
  }

  onSort(order: string) {
    this.connectApiService.setParams('order', order);
    this.connectApiService.getVideos().subscribe((videos) => {
      this.dataStoreService.videoChanged.next(videos);
      this.dataStoreService.pageInfoData.next(videos[0].pageInfo);
    });
  }
}

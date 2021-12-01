import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConnectApiService } from 'src/app/service/connect-api.service';
import { DataStoreService } from 'src/app/service/data-store.service';

export interface DialogData {
  numberPerPage: string;
  debounceTime: number;
  key: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  numberPerPage = '8';
  debounceTime = 0;
  key = '';
  totalResults = 0;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private connectApiService: ConnectApiService,
    private dataStoreService: DataStoreService
  ) {}

  ngOnInit(): void {
    const httpParams = this.connectApiService.getParams();
    this.numberPerPage = httpParams.maxResults;
    this.key = httpParams.key;
    this.debounceTime = this.connectApiService.getDebounceTime();
    this.dataStoreService.pageInfoData.subscribe((pageInfo) => {
      this.totalResults = pageInfo.totalResults;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {
    this.dialogRef.close();
    this.connectApiService.setParams('maxResults', this.numberPerPage);
    this.connectApiService.setParams('key', this.key);
    this.connectApiService.setDebounceTime(this.debounceTime);
    const pageInfo = {
      totalResults: this.totalResults,
      resultsPerPage: +this.numberPerPage,
    };
    this.dataStoreService.pageInfoData.next(pageInfo);
    this.connectApiService.getVideos().subscribe(
      (videos) => {
        this.dataStoreService.videoChanged.next(videos);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { DataStoreService } from 'src/app/service/data-store.service';
import { PageInfo } from 'src/app/shared/model/video.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  PageInfo!: PageInfo;

  pageInfoSub!: Subscription;
  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit(): void {
    this.pageInfoSub = this.dataStoreService.pageInfoData.subscribe(
      (pageInfo) => {
        this.PageInfo = pageInfo;
      }
    );
  }

  getPaginatorData(event: PageEvent): PageEvent {
    let prevPage = event.previousPageIndex ? event.previousPageIndex : 0;
    this.dataStoreService.GetNewPage(prevPage, event.pageIndex);
    return event;
  }
}

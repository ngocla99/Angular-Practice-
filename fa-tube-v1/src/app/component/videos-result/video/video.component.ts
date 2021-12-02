import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/model/video.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalVideoComponent } from '../modal-video/modal-video.component';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  @Input() video!: Video;
  runVideo = false;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onClick() {
    this.runVideo = !this.runVideo;
  }

  onShowModal() {
    this.dialog.open(ModalVideoComponent, {
      data: { link: `https://www.youtube.com/embed/${this.video.id}` },
    });
  }
}

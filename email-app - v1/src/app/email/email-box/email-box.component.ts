import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.css'],
})
export class EmailBoxComponent implements OnInit, OnDestroy {
  activeFolder!: string;
  folders!: string[];
  folderChanged!: Subscription;
  userChanged!: Subscription;
  userId!: number;
  constructor(private router: Router, private emailService: EmailService) {
    this.userChanged = this.emailService.updateUser.subscribe(
      (userId: number) => {
        this.userId = userId;
      }
    );
    this.folderChanged = this.emailService.updateActiveFolder.subscribe(
      (folder: string) => {
        this.activeFolder = folder;
      }
    );
  }

  ngOnInit(): void {
    this.folders = this.emailService.getFolders();
  }

  onClick(folder: string) {
    this.router.navigateByUrl('/messages/' + this.userId + '/' + folder);
  }

  ngOnDestroy(): void {
    this.folderChanged.unsubscribe();
    this.userChanged.unsubscribe();
  }
}

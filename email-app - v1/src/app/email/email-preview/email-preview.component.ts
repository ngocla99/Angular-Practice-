import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Message } from '../email.model';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.css'],
})
export class EmailPreviewComponent implements OnInit, OnDestroy {
  messagesByUser!: Message[];
  messagesByFolder!: Message[];
  users!: string[];
  userId!: number;
  userChanged: Subscription;
  folder!: string;
  activeMessage!: string;

  constructor(
    private emailService: EmailService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userChanged = this.emailService.updateUser.subscribe((id: number) => {
      this.userId = id;
    });
  }

  ngOnInit(): void {
    this.emailService.updateUser.subscribe((id: number) => {
      this.userId = id;
      this.route.params.subscribe((params: Params) => {
        this.folder = params['subject'];
        this.emailService.updateActiveFolder.next(this.folder);
        this.messagesByUser = this.emailService.getMessagesByUser(this.userId);
        this.messagesByFolder = this.emailService.getMessagesByFolder(
          this.folder,
          this.messagesByUser
        );
      });
    });

    this.route.params.subscribe((params: Params) => {
      this.folder = params['subject'];
      this.emailService.updateActiveFolder.next(this.folder);
      this.messagesByUser = this.emailService.getMessagesByUser(this.userId);
      this.messagesByFolder = this.emailService.getMessagesByFolder(
        this.folder,
        this.messagesByUser
      );
    });

    this.users = this.emailService.getUsers();
  }

  onShowMessage(id: string) {
    this.activeMessage = id;
    this.router.navigate([{ outlets: { detail: id } }], {
      relativeTo: this.route.parent,
    });
  }

  ngOnDestroy(): void {
    this.userChanged.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Message } from '../email.model';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.css'],
})
export class EmailPreviewComponent implements OnInit {
  messagesByUser!: Message[];
  messagesByFolder!: Message[];
  users!: string[];
  userId!: number;
  folder!: string;
  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = +params['userId']; // NOT work
      this.folder = params['subject'];
      this.messagesByUser = this.emailService.getMessagesByUser(this.userId);
      this.messagesByFolder = this.emailService.getMessagesByFolder(
        this.folder,
        this.messagesByUser
      );
    });

    this.users = this.emailService.getUsers();
  }
}

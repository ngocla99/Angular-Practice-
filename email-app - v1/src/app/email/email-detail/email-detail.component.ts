import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Message } from '../email.model';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css'],
})
export class EmailDetailComponent implements OnInit {
  message!: Message;
  id!: string;
  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.message = this.emailService.getMessageById(this.id);
    });
  }
}

import { Injectable } from '@angular/core';
import messagesList from '../messages.json';
import { Message } from './email.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private messages: Message[] = messagesList;
  construction() {}

  getUsers() {
    return [...new Set(this.messages.map((message) => message.to))];
  }

  getMessagesByUser(userId: number) {
    return this.messages.filter(
      (message) => message.to === 'myself@angular.dev'
    );
  }

  getMessagesByFolder(folderName: string, messages: Message[]) {
    return messages.filter((message) => message.folder === folderName);
  }
}

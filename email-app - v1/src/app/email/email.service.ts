import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import messagesList from '../messages.json';
import { Message } from './email.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private folders: string[] = [
    'inbox',
    'finance',
    'travel',
    'personal',
    'spam',
    'drafts',
    'sent',
  ];

  private messages: Message[] = messagesList;

  updateUser = new Subject<number>();
  updateActiveFolder = new Subject<string>();
  construction() {}

  getFolders() {
    return [...this.folders];
  }

  getUsers() {
    return [...new Set(this.messages.map((message) => message.to))];
  }

  getUser(userId: number) {
    return this.getUsers()[userId];
  }

  getMessagesByUser(userId: number) {
    return this.messages.filter(
      (message) => message.to === this.getUser(userId)
    );
  }

  getMessagesByFolder(folderName: string, messages: Message[]) {
    return messages.filter((message) => message.folder === folderName);
  }

  getMessageById(id: string) {
    return this.messages.filter((message) => message._id === id)[0];
  }
}

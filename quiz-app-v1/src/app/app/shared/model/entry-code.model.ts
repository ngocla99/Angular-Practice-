import { Question } from './question.model';

export interface EntryCode {
  id: number;
  testName: string;
  code: string;
  account: Account;
  duration: number;
  passScore: number;
}

export interface QuizData {
  account: Account;
  duration: number;
  passScore: number;
  questions: Question[];
  testName: string;
}

interface Account {
  name: string;
  clazz: string;
}

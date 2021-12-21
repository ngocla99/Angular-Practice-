export interface Question {
  _id: string;
  type: string;
  language: string;
  question: string;
  level: number;
  correct: string[];
  options: Options;
  multi: boolean;
}

interface Options {
  a: string;
  b: string;
  c: string;
  d: string;
}

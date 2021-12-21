export interface UserAnswer {
  _id: string;
  correct: string[];
}

export interface DataSubmit {
  code: string;
  UserAnswers: UserAnswer[];
}

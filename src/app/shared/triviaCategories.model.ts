import { Question } from './questions.model';

export class TriviaCategories {
    constructor(
        public id: number,
        public name: string
    ) {}
}

export interface QuestionsResponse {
      response_code: number;
      results: Question[];
}

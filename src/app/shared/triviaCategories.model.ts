import { Question } from './questions.model';

export interface TriviaCategories {
        id: number;
        name: string;
}

export interface QuestionsResponse {
      response_code: number;
      results: Question[];
}

export interface Question {
        category: string;
        type: string;
        difficulty: string;
        question: string;
        correct_answer: string;
        incorrect_answers: String[];
}

export interface AnsweredQuestion extends Question {
    userAnswer: string;
}

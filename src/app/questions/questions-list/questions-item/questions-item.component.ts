import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../../../shared/questions.model';

@Component({
  selector: 'app-questions-item',
  templateUrl: './questions-item.component.html',
  styleUrls: ['./questions-item.component.css']
})
export class QuestionsItemComponent implements OnInit {
    @Input() questionItem: Question;

    shuffledArr: string[];

    constructor() { }

    ngOnInit() {
        const shuff = [this.questionItem.correct_answer, ...this.questionItem.incorrect_answers];
        this.shuffledArr = this.getAnswers(shuff);
    }

    getAnswers(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
       return arr;
    }

}

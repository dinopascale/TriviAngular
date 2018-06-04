import { Component, OnInit, Input } from '@angular/core';
import { AnsweredQuestion } from '../../shared/questions.model';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.component.html',
  styleUrls: ['./final-score.component.css']
})
export class FinalScoreComponent implements OnInit {
    @Input() questions: AnsweredQuestion[];

    constructor() { }

    ngOnInit() {}

    getTotalScore (): number {
        return this.questions.reduce((sum: number, curr: AnsweredQuestion) => {
            if (curr.correct_answer === curr.userAnswer) {
                return sum + 1;
            } else {
                return sum;
            }
        }, 0);
    }

}

import { Component, OnInit, Input } from '@angular/core';

import { AnsweredQuestion } from '../../../shared/questions.model';

@Component({
  selector: 'app-results-card-item',
  templateUrl: './results-card-item.component.html',
  styleUrls: ['./results-card-item.component.css']
})
export class ResultsCardItemComponent implements OnInit {
    @Input() answeredQuestion: AnsweredQuestion;
    @Input() number: number;

    constructor() { }

    ngOnInit() {
        console.log(this.answeredQuestion);
    }

}

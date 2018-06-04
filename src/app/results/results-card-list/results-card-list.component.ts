import { Component, OnInit, Input } from '@angular/core';

import { AnsweredQuestion } from '../../shared/questions.model';

@Component({
  selector: 'app-results-card-list',
  templateUrl: './results-card-list.component.html',
  styleUrls: ['./results-card-list.component.css']
})
export class ResultsCardListComponent implements OnInit {
    @Input() questions: AnsweredQuestion[];

    constructor() { }

    ngOnInit() {}

}

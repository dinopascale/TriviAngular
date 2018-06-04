import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {
    @Input() correctAnswer: string;
    @Input() answers: string[];

  constructor() { }

  ngOnInit() {
  }
}

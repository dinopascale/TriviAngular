import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromQuestions from '../store/questions.reducers';
import * as fromModal from '../../core/modal-layer/store/modal-layer.reducers';
import * as ModalLayerActions from '../../core/modal-layer/store/modal-layer.actions';
import * as QuestionsAction from '../store/questions.actions';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
    questionSubcrib;
    pauseSubscrib;
    modalState: boolean;
    timeValue = 100;
    interval;
    actualQuestion: number;
    quizLength: number;
    color = 'primary';

    constructor(private store: Store<fromQuestions.FeatureState>) {}

    ngOnInit() {
        this.questionSubcrib = this.store.select('questions')
            .subscribe((state: fromQuestions.State) => {
                this.actualQuestion = state.actualQuestion;
                this.quizLength = state.questions.length;
            });
        this.startCountDown();
        this.pauseSubscrib = this.store.select('modal')
            .subscribe((state: fromModal.State) => {
                this.modalState = state.isModalOpen;
            });
    }

    startCountDown () {
        this.interval = setInterval(() => {
            if (this.modalState) {
                return false;
            }
            if (this.timeValue <= 20) {
                this.color = 'warn';
            }
            if (this.timeValue < 1) {
                if (this.actualQuestion + 1 === this.quizLength) {
                    this.store.dispatch(new ModalLayerActions.ShowModal('loading'));
                    this.store.dispatch(new QuestionsAction.SetLastAnswer({answer: ''}));
                } else {
                    this.store.dispatch(new QuestionsAction.SetAnswer({answer: ''}));
                }
            }
            this.timeValue--;
        }, 60);
    }

    stopCountDown() {
        clearInterval(this.interval);
    }

    ngOnDestroy () {
        this.questionSubcrib.unsubscribe();
        this.pauseSubscrib.unsubscribe();
        this.stopCountDown();
    }
}


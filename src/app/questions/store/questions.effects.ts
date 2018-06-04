import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap, map, tap, take } from 'rxjs/operators';

import * as QuestionsActions from './questions.actions';

@Injectable()
export class QuestionsEffects {
    @Effect()
    questionsFetch = this.actions$
        .ofType(QuestionsActions.TRY_FETCH_QUESTIONS)
        .pipe(
            switchMap((action: QuestionsActions.TryFetchQuestions) => {
                return this.http.get('https://opentdb.com/api.php');
            }),
            map((resp) => {
                if (resp['response_code'] === 0) {
                    return {
                        type: QuestionsActions.SET_QUESTIONS,
                        payload: resp['results']
                    };
                } else {
                    return {
                        type: QuestionsActions.ERR_SET_QUESTIONS
                    };
                }
            })
        );

    @Effect()
    lastQuestion = this.actions$
        .ofType(QuestionsActions.SET_LAST_ANSWER)
        .pipe(
          map((action: QuestionsActions.SetLastAnswer) => {
              this.router.navigate(['/results']);
              return {
                  type: QuestionsActions.SET_ANSWER,
                  payload: action.payload
              };
          })
        );


    constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}
}

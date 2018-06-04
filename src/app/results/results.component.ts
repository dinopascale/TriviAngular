import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromResults from './store/results.reducers';
import * as ModalLayerlActions from '../core/modal-layer/store/modal-layer.actions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
    resultsState: fromResults.FeatureState;

    constructor(private store: Store<fromResults.FeatureState>) { }

    ngOnInit() {
        this.store.subscribe((data: fromResults.FeatureState) => {
            this.resultsState = data;
        });
    }

    canDeactivate(): Observable<boolean> | boolean {
        if (this.resultsState.session.newSession) {
            this.store.dispatch(new ModalLayerlActions.ShowModal('pause'));
            return this.store.select('modal').pipe(
                map((state) => {
                    return !state.isModalOpen;
                })
            );
        }
        return true;
    }

}

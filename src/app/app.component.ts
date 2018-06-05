import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromApp from './store/app.reducers';
import * as fromModalLayer from './core/modal-layer/store/modal-layer.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    appState$: Observable<fromModalLayer.State>;

    constructor(private store: Store<fromApp.AppState>) {}

    ngOnInit () {
        this.appState$ = this.store.select('modal');
    }
}

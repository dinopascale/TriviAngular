import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as fromHome from '../home/store/home.reducers';
import * as HomeActions from '../home/store/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private store: Store<fromApp.AppState>) {}

    ngOnInit () {
    }

    onStart () {
        this.store.dispatch(new HomeActions.StartNewSession());
        this.router.navigate(['/questions']);
    }

    onOption () {
        this.store.dispatch(new HomeActions.StartNewSession());
        this.router.navigate(['/options']);
    }
}

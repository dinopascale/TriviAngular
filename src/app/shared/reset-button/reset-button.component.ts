import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromApp from '../../store/app.reducers';
import * as HomeActions from '../../core/home/store/home.actions';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.css']
})
export class ResetButtonComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {}

  onReset() {
      this.store.dispatch(new HomeActions.EndSession());
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducers';
import * as fromHome from '../home/store/home.reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    sessionState: Observable<fromHome.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
      this.sessionState = this.store.select('session');
  }

}

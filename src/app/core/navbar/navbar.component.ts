import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';

import * as fromApp from '../../store/app.reducers';
import * as fromHome from '../home/store/home.reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    sessionState: Observable<fromHome.State>;
    url$: Observable<string>;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sessionState = this.store.select('session');
    this.url$ = this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        map((event: RouterEvent) => {
            return event.url;
        })
    );
  }

}

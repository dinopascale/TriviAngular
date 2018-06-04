import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import * as HomeActions from './home.actions';

@Injectable()
export class HomeEffects {
    @Effect({dispatch: false})
    endSession = this.actions$
        .ofType(HomeActions.END_SESSION)
        .pipe(
            tap(() => {
                this.router.navigate(['/']);
            })
        );

    constructor(private actions$: Actions, private router: Router) {}
}

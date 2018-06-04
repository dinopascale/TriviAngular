import { take, map } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import * as fromHome from '../core/home/store/home.reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class NewGameGuard implements CanActivate {
    constructor(private store: Store<fromHome.State>, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('session').pipe(
            take(1),
            map((sessionState: fromHome.State) => {
                if (sessionState.newSession) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            })
        );
    }
}

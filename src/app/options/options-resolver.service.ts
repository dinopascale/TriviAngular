import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { TriviaCategories } from '../shared/triviaCategories.model';
import { InterceptorSkipHeader } from '../shared/triviaApi.interceptor';

@Injectable()
export class OptionsResolver implements Resolve<{trivia_categories: TriviaCategories[]}> {
    constructor(private http: HttpClient) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{trivia_categories: TriviaCategories[]}> {
        const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
        return this.http.get('https://opentdb.com/api_category.php', { headers }).pipe(
            map((data) => {
                return data['trivia_categories'];
            }),
            catchError((err) => {
                return Observable.throw(`error ${err}`);
            })
        );
    }
}

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpParams, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as fromApp from '../store/app.reducers';
import * as ModalLayerActions from '../core/modal-layer/store/modal-layer.actions';

import { Options } from './options.model';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class TriviaApiInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.store.dispatch(new ModalLayerActions.ShowModal('loading'));
        if (req.headers.has(InterceptorSkipHeader)) {
            const headers = req.headers.delete(InterceptorSkipHeader);
            return next.handle(req.clone({ headers })).pipe(tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.store.dispatch(new ModalLayerActions.HideModal());
                    }
                },
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        this.store.dispatch(new ModalLayerActions.ShowModal('errorApi'));
                    }
                }
            ));
        } else {
            return this.store.select('userOptions').pipe(
                take(1),
                switchMap((optionState: Options) => {
                    let params = new HttpParams();
                    Object.keys(optionState).forEach(k => {
                        if (k === 'amount' || optionState[k] !== 'any') {
                            params = params.append(k, optionState[k]);
                        }
                    });
                    const clonedReq = req.clone({ params });
                    return next.handle(clonedReq).pipe(tap(
                        (event: HttpEvent<any>) => {
                            if (event instanceof HttpResponse) {
                                this.store.dispatch(new ModalLayerActions.HideModal());
                            }
                        },
                        (err: any) => {
                            if (err instanceof HttpErrorResponse) {
                                this.store.dispatch(new ModalLayerActions.ShowModal('errorApi'));
                            }
                        }
                    ));
                })
            );
        }
    }
}

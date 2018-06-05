import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { environment } from './../environments/environment';


import { HomeEffects } from './core/home/store/home.effects';
import { reducers, metaReducers } from './store/app.reducers';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        EffectsModule.forRoot([HomeEffects]),
        StoreRouterConnectingModule,
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

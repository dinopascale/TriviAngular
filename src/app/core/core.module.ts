import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './../app-routing.module';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TriviaApiInterceptor } from '../shared/triviaApi.interceptor';
import { NewGameGuard } from './../shared/new-game-guard.service';
import { CanDeactivateGuard } from './../shared/can-deactivate.service';
import { PauseModalComponent } from './modal-layer/pause-modal/pause-modal.component';
import { ErrorModalComponent } from './modal-layer/error-modal/error-modal.component';
import { ModalLayerComponent } from './modal-layer/modal-layer.component';
import { LoadingModalComponent } from './modal-layer/loading-modal/loading-modal.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        NavbarComponent,
        ModalLayerComponent,
        AppRoutingModule
    ],
    declarations: [
        HomeComponent,
        NavbarComponent,
        PauseModalComponent,
        ErrorModalComponent,
        ModalLayerComponent,
        LoadingModalComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TriviaApiInterceptor, multi: true },
        NewGameGuard,
        CanDeactivateGuard
    ]
})
export class CoreModule {}

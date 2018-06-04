import { SharedModule } from './../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsComponent } from './results.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsReducers } from './store/results.reducers';
import { ResultsCardListComponent } from './results-card-list/results-card-list.component';
import { ResultsCardItemComponent } from './results-card-list/results-card-item/results-card-item.component';
import { FinalScoreComponent } from './final-score/final-score.component';

@NgModule({
    declarations: [
        ResultsComponent,
        ResultsCardListComponent,
        ResultsCardItemComponent,
        FinalScoreComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ResultsRoutingModule
    ]
})
export class ResultsModule {}

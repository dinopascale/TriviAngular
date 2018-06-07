import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { QuestionsRoutingModule } from './questions-routing.module';

import { QuestionsComponent } from './questions.component';
import { QuestionsReducers } from './store/questions.reducers';
import { QuestionsEffects } from './store/questions.effects';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsItemComponent } from './questions-list/questions-item/questions-item.component';
import { AnswersListComponent } from './questions-list/answers-list/answers-list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AnswersItemComponent } from './questions-list/answers-list/answers-item/answers-item.component';
import { NoQuestionsComponent } from './no-questions/no-questions.component';
import { AngularMaterialModule } from '../core/angular-material.module';

@NgModule({
    declarations: [
        QuestionsComponent,
        QuestionsListComponent,
        QuestionsItemComponent,
        AnswersListComponent,
        ProgressBarComponent,
        AnswersItemComponent,
        NoQuestionsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FlexLayoutModule,
        AngularMaterialModule,
        QuestionsRoutingModule,
        StoreModule.forFeature('questions', QuestionsReducers),
        EffectsModule.forFeature([QuestionsEffects])
    ]
})
export class QuestionsModule {}

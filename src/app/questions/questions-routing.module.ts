import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { QuestionsComponent } from './questions.component';
import { QuestionsResolver } from './questions-resolver.service';
import { NewGameGuard } from '../shared/new-game-guard.service';
import { CanDeactivateGuard } from './../shared/can-deactivate.service';

const routes: Routes = [
    {
        path: '',
        component: QuestionsComponent,
        resolve: { questions: QuestionsResolver },
        canActivate: [NewGameGuard],
        canDeactivate: [CanDeactivateGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [QuestionsResolver]
})
export class QuestionsRoutingModule {}

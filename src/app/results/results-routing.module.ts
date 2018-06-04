import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultsComponent } from './results.component';
import { NewGameGuard } from '../shared/new-game-guard.service';
import { CanDeactivateGuard } from './../shared/can-deactivate.service';

const routes: Routes = [
    { path: '', component: ResultsComponent, canActivate: [NewGameGuard], canDeactivate: [CanDeactivateGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResultsRoutingModule {}


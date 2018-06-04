import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OptionsFormComponent } from './options-form/options-form.component';
import { OptionsResolver } from './options-resolver.service';
import { NewGameGuard } from './../shared/new-game-guard.service';
import { CanDeactivateGuard } from './../shared/can-deactivate.service';

const optionsRoutes: Routes = [
    {
        path: '',
        component: OptionsFormComponent,
        resolve: {categories: OptionsResolver},
        canActivate: [NewGameGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(optionsRoutes)],
    exports: [RouterModule],
    providers: [OptionsResolver]
})
export class OptionsRoutingModule {}

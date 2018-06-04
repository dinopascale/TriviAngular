import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'options', loadChildren: './options/options.module#OptionsModule'},
    { path: 'questions', loadChildren: './questions/questions.module#QuestionsModule'},
    { path: 'results', loadChildren: './results/results.module#ResultsModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

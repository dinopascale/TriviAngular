import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { OptionsRoutingModule } from './options-routing.module';
import { OptionsFormComponent } from './options-form/options-form.component';
import { OptionsReducers } from './store/options.reducers';

@NgModule({
    declarations: [OptionsFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        OptionsRoutingModule,
        StoreModule.forFeature('userOptions', OptionsReducers)
    ]
})
export class OptionsModule {}
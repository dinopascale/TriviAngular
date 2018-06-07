import { AngularMaterialModule } from './../core/angular-material.module';
import { DecodeURIPipe } from './decodeURI.pipe';
import { NgModule } from '@angular/core';
import { ResetButtonComponent } from './reset-button/reset-button.component';

@NgModule({
    declarations: [DecodeURIPipe, ResetButtonComponent],
    imports: [AngularMaterialModule],
    exports: [DecodeURIPipe, ResetButtonComponent]
})
export class SharedModule {}

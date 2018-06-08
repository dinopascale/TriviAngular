import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        MatDividerModule,
        MatExpansionModule,
        MatIconModule,
        MatCheckboxModule,
        MatCardModule,
        MatBadgeModule
    ]
})
export class AngularMaterialModule {}

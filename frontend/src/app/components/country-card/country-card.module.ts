import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryCardComponent } from './country-card.component';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        CountryCardComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule
    ],
    exports: [
        CountryCardComponent
    ]
})

export class CountryCardModule {}
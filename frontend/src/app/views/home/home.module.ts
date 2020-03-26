import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CountryCardModule } from 'src/app/components/country-card/country-card.module';
import { CountryChartModule } from 'src/app/components/country-chart/country-chart.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        CountryCardModule,
        CountryChartModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule{}
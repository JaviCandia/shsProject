import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryChartComponent } from './country-chart.component';

import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        CountryChartComponent
    ],
    imports: [
        CommonModule,
        ChartsModule,
        FlexLayoutModule
    ],
    exports: [
        CountryChartComponent
    ]
})

export class CountryChartModule {}
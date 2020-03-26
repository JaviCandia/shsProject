import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { Country } from 'src/app/models/country.interface';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnChanges {
  @Input() actualCountry: Country;

  // Code for set and init the data in the chart
  public polarAreaChartLabels: Label[] = ['Confirmed', 'Deaths', 'Mortality'];
  public polarAreaChartData: SingleDataSet = [0, 0, 0];
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';
  public polarAreaChartColors: Array<any> = [
    {
      backgroundColor: [
        '#00838F',
        '#F50057',
        '#555'
      ],
    }
  ];
  public charTitle = "Initial data";

  ngOnChanges() {
    if (this.actualCountry) {
      this.charTitle = this.actualCountry.country;
      if (this.actualCountry.deaths > 0)
        this.polarAreaChartData = [this.actualCountry.confirmed, this.actualCountry.deaths, this.actualCountry.mortality];
      else
        this.polarAreaChartData = [this.actualCountry.confirmed];
    }
  }
}

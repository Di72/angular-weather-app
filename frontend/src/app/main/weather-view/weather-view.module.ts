import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherViewComponent } from './weather-view.component';
import { WeekViewComponent } from './week-view/week-view.component';
import { SharedModule } from '../../shared/shared.module';
import { WeekViewCardComponent } from './week-view/week-view-card/week-view-card.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { RouterModule } from '@angular/router';
import { DetailViewModule } from './detail-view/detail-view.module';
import { WeekViewModule } from './week-view/week-view.module';

@NgModule({
  imports: [RouterModule, CommonModule, SharedModule, DetailViewModule, WeekViewModule],
  exports: [DetailViewModule, WeekViewModule],
  declarations: [WeatherViewComponent]
})
export class WeatherViewModule {}

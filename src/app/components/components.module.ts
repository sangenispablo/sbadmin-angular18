import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [IncrementadorComponent, DoughnutChartComponent],
  imports: [CommonModule, FormsModule],
  exports: [IncrementadorComponent, DoughnutChartComponent],
})
export class ComponentsModule {}

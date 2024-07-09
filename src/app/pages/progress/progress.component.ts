import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: ``,
})
export class ProgressComponent implements AfterViewInit {
  progreso1: number = 10;
  progreso2: number = 50;

  get getProgreso1() {
    return `${this.progreso1}%`;
  }

  get getProgreso2() {
    return `${this.progreso2}%`;
  }

  ngAfterViewInit(): void {
    feather.replace();
  }
}

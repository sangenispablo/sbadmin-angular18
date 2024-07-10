import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``,
})
export class Grafica1Component implements AfterViewInit {
  ngAfterViewInit(): void {
    feather.replace();
  }
}

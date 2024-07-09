import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    feather.replace();
  }
}

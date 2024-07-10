import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``,
})
export class PromesasComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.getUser().then((users) => console.log(users));
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  getUser() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((body) => resolve(body.data));
    });
  }
}

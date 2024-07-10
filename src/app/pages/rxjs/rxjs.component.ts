import { AfterViewInit, Component } from '@angular/core';
import { filter, interval, map, Observable, retry, take } from 'rxjs';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``,
})
export class RxjsComponent implements AfterViewInit {
  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(2))
    //   .subscribe({
    //     next: (valor) => console.log('Suscribe:', valor),
    //     error: (error) => console.warn('Error', error),
    //     complete: () => console.info('Obs Finalizado'),
    //   });
    this.retornaIntervalo().subscribe({ next: (valor) => console.log(valor) });
  }

  retornaIntervalo(): Observable<number> {
    return interval(200).pipe(
      take(40),
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 5) {
          clearInterval(intervalo);
          observer.complete();
        }
        // cuando queremos que tire un error
        if (i === 3) {
          i = 0;
          observer.error(`Forzamos error al llegar a ${i}`);
        }
      }, 1000);
    });
  }

  ngAfterViewInit(): void {
    feather.replace();
  }
}

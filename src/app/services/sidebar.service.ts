import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      header: 'Core',
      menu: [
        {
          title: 'Dashboard',
          icon: 'activity',
          submenu: [
            { title: 'Main', url: '/dashboard' },
            { title: 'ProgressBar', url: '/dashboard/progress' },
            { title: 'Grafica 1', url: '/dashboard/grafica1' },
          ],
        },
      ],
    },
  ];
  constructor() {}
}

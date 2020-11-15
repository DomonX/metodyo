import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    items: MegaMenuItem[];

    ngOnInit() {
        this.items = [
          {id: '1', label: 'Horner', routerLink: 'lab1'},
          {id: '3', label: 'Całki numeryczne', routerLink: 'lab3'},
          {id: '4', label: 'Interpolacja', routerLink: 'lab4'}
        ];
    }

}

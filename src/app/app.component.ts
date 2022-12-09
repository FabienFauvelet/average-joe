import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  items: MenuItem[]= [];
  title = 'average-joe';


  ngOnInit() {
    this.items = [{
      label: 'Agendas',
      items: [
          {label: 'Client', icon: 'pi pi-fw pi-calendar', routerLink:'agenda/client'},
          {label: 'Professeur', icon: 'pi pi-fw pi-calendar', routerLink:'agenda/professeur'},
          {label: 'Ressource', icon: 'pi pi-fw pi-calendar', routerLink:'agenda/ressource'}
      ]
  },
  {
      label: 'Cours',
      items: [
          {label: 'Ajouter un cours', icon: 'pi pi-fw pi-calendar-plus'},
          {label: 'Modifier un cours', icon: 'pi pi-fw pi-pencil'},
          {label: 'Supprimer un cours', icon: 'pi pi-fw pi-calendar-minus'}
      ]
  },
  {
    label: 'Clients',
    items: [
        {label: 'Ajouter un client', icon: 'pi pi-fw pi-user-plus'},
        {label: 'Modifier un client', icon: 'pi pi-fw pi-user-edit'},
        {label: 'Supprimer un client', icon: 'pi pi-fw pi-user-minus'}
    ]
  },
  {
    label: 'Professeurs',
    items: [
        {label: 'Ajouter un professeur', icon: 'pi pi-fw pi-user-plus'},
        {label: 'Modifier un professeur', icon: 'pi pi-fw pi-user-edit'},
        {label: 'Supprimer un professeur', icon: 'pi pi-fw pi-user-minus'}
    ]
  },
  {
    label: 'Ressource',
    items: [
        {label: 'Ajouter une ressource', icon: 'pi pi-fw pi-plus-circle'},
        {label: 'Modifier une ressource', icon: 'pi pi-fw pi-pencil'},
        {label: 'Supprimer une ressource', icon: 'pi pi-fw pi-minus-circle'}
    ]
  }

];
}
}

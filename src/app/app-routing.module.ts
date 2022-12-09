import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
  {
    path:'agenda',
    children:[
      {path:'client',component : AgendaComponent},
      {path:'professeur',component : AgendaComponent},
      {path:'ressource',component : AgendaComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

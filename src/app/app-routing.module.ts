import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import {AddCourseComponent} from "./courses/add-course/add-course.component";
import {CoursesListComponent} from "./courses/courses-list/courses-list.component";

const routes: Routes = [
  {
    path:'agenda',
    children:[
      {path:'client',component : AgendaComponent},
      {path:'professeur',component : AgendaComponent},
      {path:'ressource',component : AgendaComponent}
    ],


  },
  {
    path:'cours',
    children:[
      {path:'ajouter',component : AddCourseComponent},
      {path:'modifier',component : CoursesListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

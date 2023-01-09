import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import {AddCourseComponent} from "./courses/add-course/add-course.component";
import {CoursesListComponent} from "./courses/courses-list/courses-list.component";
import {AddCustomerComponent} from "./customers/add-customer/add-customer.component";
import {CustomersListComponent} from "./customers/customers-list/customers-list.component";
import {AddTeacherComponent} from "./teachers/add-teacher/add-teacher.component";
import {TeachersListComponent} from "./teachers/teachers-list/teachers-list.component";
import {AddResourceComponent} from "./resources/add-resource/add-resource.component";
import {ResourcesListComponent} from "./resources/resources-list/resources-list.component";

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
  },
  {
    path:'clients',
    children:[
      {path:'ajouter',component : AddCustomerComponent},
      {path:'modifier',component : CustomersListComponent}
    ]
  },
  {
    path:'professeurs',
    children:[
      {path:'ajouter',component : AddTeacherComponent},
      {path:'modifier',component : TeachersListComponent}
    ]
  },
  {
    path:'ressources',
    children:[
      {path:'ajouter',component : AddResourceComponent},
      {path:'modifier',component : ResourcesListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

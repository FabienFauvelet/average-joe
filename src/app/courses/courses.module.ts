import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TableModule } from "primeng/table";
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import {ButtonModule} from "primeng/button";
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    CoursesListComponent,
    AddCourseComponent,
    UpdateCourseComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule
  ]
})
export class CoursesModule { }

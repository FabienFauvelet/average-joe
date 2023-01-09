import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import {PanelModule} from "primeng/panel";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [
    TeachersListComponent,
    AddTeacherComponent,
    UpdateTeacherComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    InputTextModule,
    ButtonModule,
    TableModule,
  ]
})
export class TeachersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TableModule } from "primeng/table";
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import {ButtonModule} from "primeng/button";
import {DialogModule} from 'primeng/dialog';
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HttpClientModule } from '@angular/common/http';
import {PanelModule} from 'primeng/panel';
import {AutoCompleteModule} from "primeng/autocomplete";
import {InputTextModule} from "primeng/inputtext";

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
        DialogModule,
        ReactiveFormsModule,
        CalendarModule,
        DropdownModule,
        InputNumberModule,
        NgxJsonViewerModule,
        HttpClientModule,
        PanelModule,
        AutoCompleteModule,
        InputTextModule
    ]
})
export class CoursesModule { }

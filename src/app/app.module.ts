import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgendaComponent } from './agenda/agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TableModule } from "primeng/table";
import { CoursesModule } from './courses/courses.module';
import {ButtonModule} from "primeng/button";
import {CustomersModule} from "./customers/customers.module";
import {TeachersModule} from "./teachers/teachers.module";
import {ResourcesModule} from "./resources/resources.module";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenuModule,
        BrowserAnimationsModule,
        FullCalendarModule,
        CoursesModule,
        CustomersModule,
        TeachersModule,
        ResourcesModule,
        ButtonModule,
        DialogModule,
        ToastModule,
        DropdownModule,
        FormsModule
    ],exports:[TableModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

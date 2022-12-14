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
    ButtonModule
  ],exports:[TableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateResourceComponent } from './update-resource/update-resource.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [
    UpdateResourceComponent,
    AddResourceComponent,
    ResourcesListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    NgxJsonViewerModule,
    TableModule
  ]
})
export class ResourcesModule { }

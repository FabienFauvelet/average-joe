import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import {CalendarModule} from "primeng/calendar";
import {PanelModule} from "primeng/panel";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from "primeng/table";
import {ProgressSpinnerModule} from "primeng/progressspinner";


@NgModule({
  declarations: [
    AddCustomerComponent,
    CustomersListComponent,
    UpdateCustomerComponent
  ],
    imports: [
        CommonModule,
        CalendarModule,
        PanelModule,
        ReactiveFormsModule,
        NgxJsonViewerModule,
        InputTextModule,
        TableModule,
        ProgressSpinnerModule
    ]
})
export class CustomersModule { }

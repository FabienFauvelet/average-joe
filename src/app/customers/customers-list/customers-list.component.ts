import {Component, OnInit} from '@angular/core';
import {CustomersService} from "../services/customers.service";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.less']
})
export class CustomersListComponent implements OnInit{
  customers: Customer[]=[];

  constructor(private customersService : CustomersService) {
  }

  ngOnInit(): void {
    this.customersService.getCustomersList().subscribe(
      value => this.customers=value
    );
  }

  editCustomer(course: any) {

  }

  deleteCustomer(customer: Customer, rowIndex: number) {
    this.customersService.deleteCustomer(customer.id).subscribe(
      value => this.customers.splice(rowIndex,1)
    )
  }
}

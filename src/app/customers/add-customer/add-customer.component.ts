import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomersService} from "../services/customers.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.less']
})
export class AddCustomerComponent implements OnInit{
  form= this.fb.group({
    firstName:[undefined,Validators.required],
    lastName:[undefined,Validators.required],
    birthDate : [this.getTodayDateMinus12Years(),Validators.required],
    address : this.fb.group({
      number:[undefined,Validators.required],
      street:[undefined,Validators.required],
      postalCode:[undefined,Validators.required],
      city:[undefined,Validators.required],
      })
  });
  maxDate : Date;
  constructor(private fb: FormBuilder, private service:CustomersService) {
    this.maxDate=this.getTodayDateMinus12Years();
  }
  submitForm($event: SubmitEvent) {
    this.service.addCustomer({
      firstName:this.form.get('firstName')?.value,
      lastName:this.form.get('lastName')?.value,
      address:{
        street:this.form.get('address')?.get('number')?.value+" "+this.form.get('address')?.get('street')?.value,
        zipCode:this.form.get('address')?.get('postalCode')?.value,
        city:this.form.get('address')?.get('city')?.value
      }
    }).subscribe();
  }

  getTodayDateMinus12Years() : Date{
    let date:Date = new Date();
   date.setFullYear(date.getFullYear()-12);
    return date;
  }
  ngOnInit(): void {
  }
}

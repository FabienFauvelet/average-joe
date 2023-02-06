import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomersService} from "../services/customers.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['../../app.component.less','./add-customer.component.less']
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
  waiting: boolean = false;
  constructor(private fb: FormBuilder, private service:CustomersService, private messageService:MessageService,
              private router: Router) {
    this.maxDate=this.getTodayDateMinus12Years();
  }
  submitForm($event: SubmitEvent) {
    this.waiting=true;
    this.service.addCustomer({
      firstName:this.form.get('firstName')?.value,
      lastName:this.form.get('lastName')?.value,
      birthDate:this.form.get('birthDate')?.value,
      address:{
        street:this.form.get('address')?.get('number')?.value+" "+this.form.get('address')?.get('street')?.value,
        zipCode:this.form.get('address')?.get('postalCode')?.value,
        city:this.form.get('address')?.get('city')?.value
      }
    }).subscribe({
      next: (value) => {
          this.waiting=false;
          this.router.navigate(['/clients/modifier']);
        },
      error: (error) =>{
        this.waiting=false;
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue',
          detail: 'Erreur lors de l\'appel au service de création d\'un client :' + error.status + ' ' + error.statusText
      })}
    });
  }

  getTodayDateMinus12Years() : Date{
    let date:Date = new Date();
   date.setFullYear(date.getFullYear()-12);
    return date;
  }
  ngOnInit(): void {
  }
}

import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface CreateCustomerCommand {
  firstName?:string| null;
  lastName?:string| null;
  address?:Address| null;
}
interface Address{
  street?:string| null;
  zipCode?:string| null;
  city?:string| null;
}

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomersList() : Observable<Customer[]> {
    return of([
      {
        id:"bcb4c68e-28bc-462f-a6d1-26a2f7e789c7", firstName:"John", lastName:"Doe", birthDate:new Date('1990-01-05'),
        address:{number:"5", street:"rue du petit pont", postalCode:"37000",city:"TOURS"}
      },
    ]);
  }
  addCustomer(createCustomerCommand : CreateCustomerCommand) : Observable<any>{
    return this.http.post<any>("http://localhost:4200/customers", createCustomerCommand);
  }
}


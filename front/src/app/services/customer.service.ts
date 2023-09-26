import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = 'http://localhost:8000/customers'
  constructor(private httpClient: HttpClient) { }
  register(customer : Customer){
    return this.httpClient.post<Customer>(this.customerUrl, customer);
  }
}

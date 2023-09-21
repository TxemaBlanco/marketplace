import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import {Customer} from '../../model/customer.model';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.scss']
})
export class NewcustomerComponent {

  
  constructor( private http: HttpClient, private router: Router){}


AddSupportForm!: FormGroup; 


  ngOnInit(): void {
   this.AddSupportForm = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    password: new FormControl(),
   });
  }

  back(){
    this.router.navigate(['']);
  }

  
  onSubmitForm(): void {
    this.addCustomer();
  }

   addCustomer(): void {

    let customer: Customer = this.AddSupportForm.value;

    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(customer);
    this.http.post<any[]>('http://localhost:8000/customers', body)
    .subscribe(createSupport => 
      {
          console.log("Añadido con exito");

      });
  } 
}

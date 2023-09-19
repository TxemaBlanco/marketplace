import { Component } from '@angular/core';
import { Customer } from '../model/customer.model';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public customer: Customer = new Customer();

  constructor(private router: Router, private customerService: CustomerService) {
  }
  registerCustomer(): void {
    this.customerService.register(this.customer).subscribe(date => {
      alert("Customer registerd succesfully.");
    });
  }
}



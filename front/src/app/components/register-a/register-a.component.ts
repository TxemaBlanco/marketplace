import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/Customer.model';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/examples/service/customer.service';

@Component({
  selector: 'app-register-a',
  templateUrl: './register-a.component.html',
  styleUrls: ['./register-a.component.scss']
})
export class RegisterAComponent {
  selectedDniType: string = 'DNI';
  registrationForm!: FormGroup;
  newCustomer : Customer = {
    id: 0,
    email: '',
    name: '',
    surname: '',    
    dni: '',
    surname2: '',
    street: '',
    number: 0,
    gate: 0,
    floor: 0,
    letter: '',
    postalCode: '',
    municipality: '',
    province: '',
    password: '',
    confirmPassword: ''
  } 
}
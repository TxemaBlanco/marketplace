import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './client-details.component';
import { CustomerService } from '../../../services/customers/customer.service';
import { OrderService } from '../../../services/order/order.service';
import { of } from 'rxjs';

describe('ClientDetailsComponent', () => {
  let component: ClientDetailsComponent;
  let fixture: ComponentFixture<ClientDetailsComponent>;
  let customerServiceSpy: jasmine.SpyObj<CustomerService>;
  let orderServiceSpy: jasmine.SpyObj<OrderService>;

  beforeEach(() => {
    customerServiceSpy = jasmine.createSpyObj('CustomerService', ['getCustomers', 'getCustomer']);
    orderServiceSpy = jasmine.createSpyObj('OrderService', ['getOrdersByEmail']);

    TestBed.configureTestingModule({
      declarations: [ClientDetailsComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: CustomerService, useValue: customerServiceSpy },
        { provide: OrderService, useValue: orderServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(ClientDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve customers from CustomerService', () => {
    const customers = [{ email: 'customer1@example.com' }];
    customerServiceSpy.getCustomers.and.returnValue(of(customers));

    component.getCustomers();

   
  });

  it('should retrieve customer and orders when selected email', () => {
    const email = 'customer1@example.com';
    const customer = { email: email, name: 'John' };
    const orders = [{ date: '2023-10-06', comic: { isbn: '123', title: 'Comic' } }];


    component.selectedemail(email);

  });

  it('should set form controls with customer data on selection', () => {
    const email = 'customer1@example.com';
    const customer = {
      email: email,
      dni: '12345678',
      name: 'John',
      surname: 'Doe',
      surname2: 'Smith',
      street: '123 Main St',
      number: '456',
      gate: 'A',
      stairs: '1',
      floor: '2',
      letter: 'B',
      postalcode: '12345',
      town: 'City',
      province: 'State',
      id: 1,
      password: 123456,
      confirmPassword: 123456,
    };

   

    component.selectedemail(email);
    
    expect(component.formcustomer.value).toEqual(customer);
  });

  it('should update current page number', () => {
    component.goToPage(2);
    expect(component.currentPage).toBe(2);

    component.goToPage(0);
    expect(component.currentPage).toBe(1);

    component.goToPage(5);
    expect(component.currentPage).toBe(5);

    component.goToPage(-1);
    expect(component.currentPage).toBe(1);
  });


});

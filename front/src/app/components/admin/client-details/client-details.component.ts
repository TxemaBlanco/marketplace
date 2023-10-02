import {Component, OnInit } from '@angular/core';
/* import { Comic } from 'src/app/models/Comic';
import { Genre } from 'src/app/models/Genre'; */
import { ComicService } from '../../../services/comic.service';
import { FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import { Customer } from 'src/app/models/Customer.model';
import { Order } from 'src/app/models/Order';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit{
/*   comics: Comic[] = [];
  originalComics: Comic[] = [];
  genres:  Genre[] = []; */
 /*  orders: Order[] = []; */
  customers: Customer[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;

  formcustomer!: FormGroup;
  email!: FormControl;
  customersemail!: Customer; 
  orderemail: Order[]  = [];

 
  constructor(private comicService: ComicService, private customerservice: CustomerService, private orderservice:OrderService) {}

  ngOnInit(): void {
/*     this.getComics();
    this.getGenres(); */
     this.getCustomers(); 
   

  


    

    this.formcustomer = new FormGroup({
      dni: new FormControl(''),
      name: new FormControl(''),
      surname: new FormControl(''),
      surname2: new FormControl(''),
      street: new FormControl(''),
      number: new FormControl(''),
      gate: new FormControl(''),
      stairs: new FormControl(''),
      floor: new FormControl(''),
      letter: new FormControl(''),
      postalcode: new FormControl(''),
      town: new FormControl(''),
      province: new FormControl('')
    });

  }

  ngAfterViewInit(): void{
/*     this.ordersOnCurrentPage; */
  }



/* 
  getordersbyemail(): void{
    this.orderservice.getOrdersByEmail(email).subscribe((orders: Order[]) =>{
      this.orderemail = orders;
  
    });
  } */
    




 /*  getComics(): void {
    this.comicService.getComics().subscribe((comics) => {
      this.comics = comics;
      this.originalComics=comics;
    });
  }

  getGenres(): void {
    this.comicService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  } */

  getCustomers(): void {
    this.customerservice.getCustomers().subscribe((customers: Customer[]) =>{
      this.customers = customers;
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.orderemail.length / this.itemsPerPage);
  }

  getPages(): number[] {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  get ordersOnCurrentPage(): Order[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.orderemail.length);
    return this.orderemail.slice(startIndex, endIndex);
  }

  selectedemail(email: any){
    this.customerservice.getCustomer(email).subscribe((customers: Customer) =>{
      this.customersemail = customers;
      this.formcustomer.setValue({dni: this.customersemail.dni, name: this.customersemail.name,
        surname: this.customersemail.surname, surname2: this.customersemail.surname2,
        street: this.customersemail.street, number: this.customersemail.number,
        gate: this.customersemail.gate, stairs: this.customersemail .stairs,
        floor: this.customersemail.floor, letter: this.customersemail.letter,
        postalcode: this.customersemail.postalcode, town: this.customersemail.town,
        province: this.customersemail.province})
    });
    this.orderservice.getOrdersByEmail(email).subscribe((orders: Order[]) =>{
     this.orderemail = orders;
    
    
    
  });
  }





}

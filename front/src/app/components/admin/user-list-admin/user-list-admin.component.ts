import { Component } from '@angular/core';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from '../../../services/customers/customer.service';

@Component({
  selector: 'app-user-list-admin',
  templateUrl: './user-list-admin.component.html',
  styleUrls: ['./user-list-admin.component.scss']
})

export class UserListAdminComponent {
  customers: Customer[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  searchTextGlobal: string = '';
  customer: Customer[] = [];
  constructor(
    private customerservice: CustomerService){}

    ngOnInit(): void {
      this.getCustomers();}

      getCustomers(): void {
        this.customerservice.getCustomers().subscribe((customers: Customer[]) => {
          this.customers = customers;
        });
      }
      goToPage(page: number) {
        if (page >= 1 && page <= this.getTotalPages()) {
          this.currentPage = page;
        }
      }
    
      getTotalPages(): number {
        return Math.ceil(this.customers.length / this.itemsPerPage);
      }
    
      getPages(): number[] {
        const totalPages = this.getTotalPages();
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
    
      get customersOnCurrentPage(): Customer[] {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = Math.min(
          startIndex + this.itemsPerPage,
          this.customers.length
        );
        return this.customers.slice(startIndex, endIndex);
      }
      globalsearch() {
        if (this.searchTextGlobal.trim() === '') {
          this.getCustomers();
          return;
        }
        this.customerservice.searchCustomers(this.searchTextGlobal).subscribe((customers) => {
          this.customer = customers;
          const searchKeywords = this.searchTextGlobal.toLowerCase().split(' ');
          const filteredCustomers = this.customer.filter((customer) => {
            const customerEmail = customer.email.toLowerCase();
            const customerDni = customer.dni.toLowerCase();
            const customerName = customer.name.toLowerCase();
            const customerSurname = customer.surname.toLowerCase();
            const customerSurname2 = customer.surname2.toLowerCase();
            return (
              searchKeywords.some(keyword => customerEmail.includes(keyword)) ||
              searchKeywords.some(keyword => customerDni .includes(keyword)) ||
              searchKeywords.some(keyword => customerName.includes(keyword)) ||
              searchKeywords.some(keyword => customerSurname.includes(keyword)) ||
              searchKeywords.some(keyword => customerSurname2.includes(keyword)) 
            );
          });
          this.customers = filteredCustomers;
        });
      }
    
    
    
    
    
    
    
    
    
    
    
      
}

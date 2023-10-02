import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/Order';
import { ComicService } from '../../services/comic.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-purchase-history',
  templateUrl: './user-purchase-history.component.html',
  styleUrls: ['./user-purchase-history.component.scss'],
  providers: [
    DatePipe, 
  ],
})
export class UserPurchaseHistoryComponent implements OnInit {
  userEmail: string = '';
  orders: Order[] = [];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private comicService: ComicService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userEmail = params.get('email') || '';
      this.loadUserPurchaseHistory();
    });
  }

  loadUserPurchaseHistory(): void {
   this.orderService.getOrdersByEmail(this.userEmail).subscribe(orders => {
      this.orders = orders.map(order => ({
        ...order,
        date: this.formatDate(order.date) 
      }));
    });
  }
  formatDate(dateStr: string): string {
    const orderDate = new Date(dateStr);
    return this.datePipe.transform(orderDate, 'dd/MM/yyyy') || '';
  }
  loadComicDetailsForOrders(): void {
    for (const order of this.orders) {
      this.comicService.getComicByISBN(order.comic_isbn).subscribe((comic) => {
        order.comic = comic;
      });
    }
  }
}

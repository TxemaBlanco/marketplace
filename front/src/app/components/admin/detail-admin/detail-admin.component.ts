import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
import { Comic } from 'src/app/models/Comic';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.scss']
})
export class DetailAdminComponent {
  comic: Comic | undefined;
  isbn: any;
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private comicService: ComicService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
   this.route.params.subscribe(params => {
      this.isbn = params['isbn'];
      
      this.comicService.getComicByISBN(this.isbn).subscribe(comic => {
        this.comic = comic;
      });
    });
  }

  addToCart() {
    if (this.comic) {
      this.cartService.addToCart(this.comic);
      const cartItems = this.cartService.getCartItems();
      console.log('Carrito:', cartItems);
    }
    
  }
  openConfirmationModal() {
    this.addToCart();
    Swal.fire({
      title: 'Cómic añadido al carrito',
      icon: 'success',
      confirmButtonColor: 'rgba(29, 41, 81, 1)',
      confirmButtonText: 'Volver a la lista de comics',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/comicList']); 
      }
    });
  }
}


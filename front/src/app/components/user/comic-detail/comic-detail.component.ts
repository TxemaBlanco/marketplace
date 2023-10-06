import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic/comic.service';
import { Comic } from 'src/app/models/Comic';
import { CartService } from 'src/app/services/cart/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {
  comic: Comic | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private comicService: ComicService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');

    if (isbn) {
      this.comicService.getComicByISBN(isbn).subscribe(
        (comic: Comic) => {
          this.comic = comic;
          console.log(this.comic.photo)
        },
        (error) => {
          console.error('Error al obtener el cómic:', error);
        }
      );
    }
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
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
import { Comic } from 'src/app/models/Comic';
import { CartService } from 'src/app/services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {
  comic: Comic | undefined;
  modal: any;
  message = 'Añadido al carrito';
  modalContent: any = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private comicService: ComicService,
    private cartService: CartService,
    private modalService: NgbModal 
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

      this.modal = this.modalService.open(this.modalContent);
  
      setTimeout(() => {
        this.modal.close();
        this.router.navigate(['/comicList']); 
      }, 2000);
    }
    
  }
}
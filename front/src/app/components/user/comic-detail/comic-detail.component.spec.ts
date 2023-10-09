import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ComicDetailComponent } from './comic-detail.component';
import { ComicService } from 'src/app/services/comic/comic.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { of } from 'rxjs';
import { Comic } from 'src/app/models/Comic';
import Swal from 'sweetalert2';

describe('ComicDetailComponent', () => {
  let component: ComicDetailComponent;
  let fixture: ComponentFixture<ComicDetailComponent>;
  let mockComicService: jasmine.SpyObj<ComicService>;
  let mockCartService: jasmine.SpyObj<CartService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockComicService = jasmine.createSpyObj('ComicService', ['getComicByISBN']);
    mockCartService = jasmine.createSpyObj('CartService', ['addToCart', 'getCartItems']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: (param: string) => '123456789', 
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [ComicDetailComponent],
      imports: [RouterModule.forRoot([])], 
      providers: [
        { provide: ComicService, useValue: mockComicService },
        { provide: CartService, useValue: mockCartService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should add comic to cart when addToCart is called', () => {
    const mockComic: Comic = {
      isbn: '',
      title: '',
      author: '',
      ishardcover: false,
      photo: '',
      price: 0,
      synopsis: '',
      stock: 0,
      genres: [],
      isEditing: undefined
    };
    mockCartService.addToCart.and.stub(); // Evita que el método real se ejecute
  
    component.comic = mockComic;
    component.addToCart();
  
    expect(mockCartService.addToCart).toHaveBeenCalledWith(mockComic);
  });
  
  it('should open confirmation modal and navigate to comicList when openConfirmationModal is called', () => {
    const mockComic: Comic = {
      isbn: '',
      title: '',
      author: '',
      ishardcover: false,
      photo: '',
      price: 0,
      synopsis: '',
      stock: 0,
      genres: [],
      isEditing: undefined
    };
    const swalFireStub = jasmine.createSpyObj('Swal', ['fire']);
    swalFireStub.fire.and.returnValue(Promise.resolve({ isConfirmed: true })); // Simula que el usuario confirmó
  
    component.comic = mockComic;
    component.openConfirmationModal();
  
    expect(mockCartService.addToCart).toHaveBeenCalledWith(mockComic);
    expect(swalFireStub.fire).toHaveBeenCalledWith({
      title: 'Cómic añadido al carrito',
      icon: 'success',
      confirmButtonColor: 'rgba(29, 41, 81, 1)',
      confirmButtonText: 'Volver a la lista de comics',
    });
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/comicList']);
  });
  
});

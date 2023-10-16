import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { DetailAdminComponent } from './detail-admin.component';
import { ComicService } from 'src/app/services/comic/comic.service';
import { CartService } from 'src/app/services/cart/cart.service';

describe('DetailAdminComponent', () => {
  let component: DetailAdminComponent;
  let fixture: ComponentFixture<DetailAdminComponent>;
  let mockActivatedRoute: any;
  let mockRouter: any;
  let mockComicService: any;
  let mockCartService: any;

  beforeEach(() => {
    mockActivatedRoute = {
      params: of({ isbn: '1234567891235' }),
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate'), 
    };

    mockComicService = {
      getComicByISBN: jasmine.createSpy('getComicByISBN').and.returnValue(of({})), 
    };

    mockCartService = {
      addToCart: jasmine.createSpy('addToCart'), 
    };

    TestBed.configureTestingModule({
      declarations: [DetailAdminComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: ComicService, useValue: mockComicService },
        { provide: CartService, useValue: mockCartService },
      ],
    });

    fixture = TestBed.createComponent(DetailAdminComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the ClientDetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch comic details on ngOnInit', () => {
    const mockComic = { title: 'Sample Comic' };
    mockComicService.getComicByISBN.and.returnValue(of(mockComic));

    component.ngOnInit();

  
  });

  it('should add comic to cart on addToCart', () => {
    const mockComic = { title: 'Sample Comic' };
  

    component.addToCart();

    expect(mockCartService.addToCart).toHaveBeenCalledWith(mockComic);
  });

  it('should navigate to comicList after adding to cart', () => {
    component.openConfirmationModal();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/comicList']);
  });
});

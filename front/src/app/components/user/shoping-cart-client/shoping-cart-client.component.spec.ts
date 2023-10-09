import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopingCartClientComponent } from './shoping-cart-client.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { ComicService } from 'src/app/services/comic/comic.service';
import { of } from 'rxjs';

describe('ShopingCartClientComponent', () => {
  let component: ShopingCartClientComponent;
  let fixture: ComponentFixture<ShopingCartClientComponent>;

  
  const cartServiceStub = {
    getCartItems: () => [],
    removeFromCart: () => {},
    getSubtotal: () => 0,
  };

  
  const comicServiceStub = {
    getGenres: () => of([]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopingCartClientComponent],
      providers: [
        { provide: CartService, useValue: cartServiceStub },
        { provide: ComicService, useValue: comicServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize comics and genres', () => {
    expect(component.comics).toEqual([]);
    expect(component.genres).toEqual([]);
  });

  it('should delete shopping comic', () => {
    spyOn(cartServiceStub, 'removeFromCart').and.callThrough();

    component.deleteShoppingComic(0);

    expect(cartServiceStub.removeFromCart).toHaveBeenCalledWith(0);
  });

  it('should set subtotal and total', () => {
    spyOn(cartServiceStub, 'getSubtotal').and.returnValue(50);

    component.setSubtotal();
    component.setTotal();

    expect(component.subtotal).toBe(50);
    expect(component.total).toBe(56); 
  });
});

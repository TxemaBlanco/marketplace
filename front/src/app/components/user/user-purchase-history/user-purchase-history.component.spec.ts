import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPurchaseHistoryComponent } from './user-purchase-history.component';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
import { ComicService } from 'src/app/services/comic/comic.service';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { Comic } from 'src/app/models/Comic';
import { Genre } from 'src/app/models/Genre';

describe('UserPurchaseHistoryComponent', () => {
  let component: UserPurchaseHistoryComponent;
  let fixture: ComponentFixture<UserPurchaseHistoryComponent>;

  const orderServiceMock = {
    getOrdersByEmail: () => of([] as Order[]),
  };

  const comicServiceMock = {
    getGenres: () => of([] as Genre[]),
    getComicByISBN: () => of({} as Comic),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPurchaseHistoryComponent],
      providers: [
        { provide: OrderService, useValue: orderServiceMock },
        { provide: ComicService, useValue: comicServiceMock },
        DatePipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty orders', () => {
    expect(component.orders).toEqual([]);
  });

  it('should load user purchase history', () => {
    const orderService = TestBed.inject(OrderService);
    spyOn(orderService, 'getOrdersByEmail').and.returnValue(of([]));

    component.loadUserPurchaseHistory();

    expect(orderService.getOrdersByEmail).toHaveBeenCalledWith('user@example.com');
    expect(component.orders).toEqual([]);
  });

  it('should format date correctly', () => {
    const datePipe = TestBed.inject(DatePipe);

    const formattedDate = component.formatDate('2023-10-09T12:00:00Z');

    expect(formattedDate).toEqual('09/10/2023');
  });

  it('should load comic details for orders', () => {
    const orderService = TestBed.inject(OrderService);
    spyOn(orderService, 'getOrdersByEmail').and.returnValue(of([{ comic_isbn: '12345' } as Order]));

    const comicService = TestBed.inject(ComicService);
    spyOn(comicService, 'getComicByISBN').and.returnValue(of({} as Comic));

    component.loadUserPurchaseHistory();
    component.loadComicDetailsForOrders();

    expect(comicService.getComicByISBN).toHaveBeenCalledWith('12345');
  });

  it('should apply filters', () => {
    

    component.columnFilters = {
      isbn: '12345',
      title: 'Comic 1',
      author: 'Author 1',
      genre: null,
      coverType: 'hard',
    };

    component.applyFilters();

  
  });

});

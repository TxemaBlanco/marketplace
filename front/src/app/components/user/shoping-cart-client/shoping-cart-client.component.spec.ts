import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartClientComponent } from './shoping-cart-client.component';

describe('ShopingCartClientComponent', () => {
  let component: ShopingCartClientComponent;
  let fixture: ComponentFixture<ShopingCartClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopingCartClientComponent]
    });
    fixture = TestBed.createComponent(ShopingCartClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

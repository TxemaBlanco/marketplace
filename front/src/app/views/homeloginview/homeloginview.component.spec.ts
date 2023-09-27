import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloginviewComponent } from './homeloginview.component';

describe('HomeloginviewComponent', () => {
  let component: HomeloginviewComponent;
  let fixture: ComponentFixture<HomeloginviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeloginviewComponent]
    });
    fixture = TestBed.createComponent(HomeloginviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

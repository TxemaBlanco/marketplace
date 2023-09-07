import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeadminviewComponent } from './homeadminview.component';

describe('HomeadminviewComponent', () => {
  let component: HomeadminviewComponent;
  let fixture: ComponentFixture<HomeadminviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeadminviewComponent]
    });
    fixture = TestBed.createComponent(HomeadminviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginviewComponent } from './adminloginview.component';

describe('AdminloginviewComponent', () => {
  let component: AdminloginviewComponent;
  let fixture: ComponentFixture<AdminloginviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminloginviewComponent]
    });
    fixture = TestBed.createComponent(AdminloginviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

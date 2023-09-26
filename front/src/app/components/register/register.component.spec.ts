import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAComponent } from './register.component';

describe('RegisterAComponent', () => {
  let component: RegisterAComponent;
  let fixture: ComponentFixture<RegisterAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAComponent]
    });
    fixture = TestBed.createComponent(RegisterAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

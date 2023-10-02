import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComictableadminComponent } from './comictableadmin.component';

describe('ComictableadminComponent', () => {
  let component: ComictableadminComponent;
  let fixture: ComponentFixture<ComictableadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComictableadminComponent]
    });
    fixture = TestBed.createComponent(ComictableadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

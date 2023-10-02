import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComicComponent } from './EditComicComponent';

describe('EditComicComponent', () => {
  let component: EditComicComponent;
  let fixture: ComponentFixture<EditComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditComicComponent]
    });
    fixture = TestBed.createComponent(EditComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

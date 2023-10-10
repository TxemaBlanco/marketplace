import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', () => {
    expect(component.myForm).toBeTruthy();
  });

  it('should set ISBN form control as required', () => {
    const isbnControl = component.myForm.get('isbn');
    expect(isbnControl?.hasError('required')).toBeTruthy();
  });




  it('should submit the form when onSubmit is called', () => {
    spyOn(component, 'upload');
    component.myForm.patchValue({
      isbn: '1234567890123',

    });

    component.onSubmit();
    expect(component.upload).toHaveBeenCalled();

  });
});

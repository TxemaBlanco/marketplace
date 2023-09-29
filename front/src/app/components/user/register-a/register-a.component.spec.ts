import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterAComponent } from './register-a.component';

describe('RegisterAComponent', () => {
  let component: RegisterAComponent;
  let fixture: ComponentFixture<RegisterAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterAComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the registration form', () => {
    expect(component.registrationForm).toBeDefined();
    expect(component.registrationForm.get('email')).toBeDefined();
    
  });

  

  it('should validate password fields', () => {
    const passwordControl = component.registrationForm.get('password');
    const confirmPasswordControl = component.registrationForm.get(
      'confirmPassword'
    );});


});

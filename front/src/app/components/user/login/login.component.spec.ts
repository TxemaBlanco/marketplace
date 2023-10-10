import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../../../services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  const loginServiceStub = {
    postLogin: (data: any) => {

      if (data.email === 'admin' && data.password === '123456') {
        return of({ message: 'Login Success', email: 'admin@example.com' });
      } else if (data.email === 'user@example.com' && data.password === 'password') {
        return of({ message: 'Login Success', email: 'user@example.com' });
      } else {
        return of({ message: 'Password not match' });
      }
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        { provide: LoginService, useValue: loginServiceStub },
        UserService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values for email and password', () => {
    expect(component.email).toBe('');
    expect(component.password).toBe('');
  });

  it('should login with valid email and password', () => {
    component.email = 'admin';
    component.password = '123456';
    spyOn(Swal, 'fire').and.stub();

    component.login();

  });

  it('should handle invalid email', () => {
    component.email = 'invalid@example.com';
    component.password = 'password';
    spyOn(Swal, 'fire').and.stub();

    component.login();


  });

  it('should handle incorrect password', () => {
    component.email = 'user@example.com';
    component.password = 'wrongpassword';
    spyOn(Swal, 'fire').and.stub();

    component.login();


  });
});

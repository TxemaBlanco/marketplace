
import { Component } from '@angular/core';
import { Login } from './login.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(
    private service: LoginService,
    private router: Router,
    private userService: UserService 
  ) { }

  login() {
    let bodyData: Login = {
      email: this.email,
      password: this.password
    }
  
    this.service.postLogin(bodyData).subscribe((resultData: any) => {
      if (resultData.message == "Email not exist") {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El email no existe',
          customClass: 'custom-swal',
          showConfirmButton: true,
          width: 300, 
          confirmButtonColor: 'rgba(29, 41, 81, 1)',
        });
      } else if (resultData.message == "Login Success") {
        Swal.fire({
        
          title: 'Bienvenid@',
          text: 'Logueado con éxito',
          customClass: 'custom-swal', 
          showConfirmButton: true,
          width: 300, 
          confirmButtonColor: '#008000',
        }).then(() => {
          this.userService.setLogdeInEmail(resultData.email);
          this.router.navigateByUrl('comicList');
        });
      }else if(resultData.message == "password Not Match"){
        Swal.fire({
          title: 'Error',
          text: 'La contraseña para ese email no coincide',
          customClass: 'custom-swal' ,
          showConfirmButton: true,
          width: 300, 
          confirmButtonColor: '#ff0000',
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'La contraseña y el email no coinciden',
          customClass: 'custom-swal' ,
          showConfirmButton: true,
          width: 300, 
          confirmButtonColor: '#ff0000',
        });
      }
    });
  }
}
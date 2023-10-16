import { Component } from '@angular/core';
import { Login } from '../../../models/login.model';
import { LoginService } from '../../../services/login/login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  public resetPasswordEmail!: string;
  isValidEmail: boolean = false;

  constructor(
    private service: LoginService,
    private router: Router,
    private userService: UserService 
  ) { }

  login() {
    if (this.email === "admin" && this.password === "123456") {
     
      this.router.navigateByUrl('admin');
      return; 
    }

    let bodyData: Login = {
      email: this.email,
      password: this.password
    }

  
    localStorage.setItem('email', this.email);
  
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
          showCancelButton: true, 
          cancelButtonText: 'Cancelar', 
          showCloseButton: true, 
          confirmButtonText: 'Registrate', 
          
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('register');
          }
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
          localStorage.setItem('loggedInEmail', resultData.email);
          this.userService.setLogdeInEmail(resultData.email);
          this.router.navigateByUrl('comicList');
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'La contraseña no coincide',
          customClass: 'custom-swal' ,
          showConfirmButton: true,
          width: 300, 
          confirmButtonColor: '#ff0000',
        });
      }
    });
  }

  checkValidEmail(event: string){
    const value = event; 
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    this.isValidEmail = pattern.test(value);
    return this.isValidEmail;
  }

  confirmToSend(){
    if(this.checkValidEmail(this.resetPasswordEmail)){
      console.log(this.resetPasswordEmail);
      this.resetPasswordEmail= '';
    }
  }

}

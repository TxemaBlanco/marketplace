// login.component.ts
import { Component } from '@angular/core';
import { Login } from './login.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
        alert("El email no existe");
      } else if (resultData.message == "Login Success") {
        alert("Logueado con éxito");

        
        this.userService.setLoggedInUsername(resultData.username);

        this.router.navigateByUrl('comicList');
      } else {
        alert("Incorrecto la contraseña y el email no coinciden");
      }
    });
  }
}

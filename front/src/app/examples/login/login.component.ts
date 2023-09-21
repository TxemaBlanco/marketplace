import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string ="";
  password: string ="";
  constructor(private router: Router,private http: HttpClient, private service:LoginService) {}
 
  Login() {
    
 
    let bodyData:Login = {
      email: this.email,
      password: this.password,
    };
    console.log(bodyData);
 
        this.service.postLogin(bodyData).subscribe((resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
 
        }
        else if(resultData.message == "Login Success")
    
         {
          this.router.navigateByUrl('/home');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }
      });
    }

}

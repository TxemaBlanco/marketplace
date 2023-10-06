import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-headerclient',
  templateUrl: './headerclient.component.html',
  styleUrls: ['./headerclient.component.scss']
})
export class HeaderclientComponent {
  isMenuOpen = false;
  
  constructor(private userService: UserService) { }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  closeMenu() {
    this.isMenuOpen = false; 
  }
  getLoggedInUsername(): string {
    return this.userService.getLoggedInUsername();
  }
  onCloseSession():void{
    this.userService.logout();
  }
}


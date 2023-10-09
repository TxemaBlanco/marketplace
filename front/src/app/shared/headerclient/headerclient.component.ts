import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-headerclient',
  templateUrl: './headerclient.component.html',
  styleUrls: ['./headerclient.component.scss']
})
export class HeaderclientComponent implements OnInit {
  isMenuOpen = false;
  loggedInEmail: string | null;

 constructor(private userService: UserService) {
  this.loggedInEmail = localStorage.getItem('loggedInEmail');
  console.log('Valor de loggedInEmail en el constructor:', this.loggedInEmail);
}

  ngOnInit() {
  
    this.loggedInEmail = localStorage.getItem('loggedInEmail');
    console.log('Valor de loggedInEmail en ngOnInit:', this.loggedInEmail);
   
    
    window.addEventListener('storage', (event) => {
      if (event.key === 'loggedInEmail') {
        this.loggedInEmail = event.newValue;
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  closeMenu() {
    this.isMenuOpen = false; 
  }

  getLoggedInUsername(): string {
    return this.userService.getLoggedInUsername();
  }

  onCloseSession(): void {
    this.userService.logout();
  }
}

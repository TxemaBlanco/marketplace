import { Component } from '@angular/core';

@Component({
  selector: 'app-headerclient',
  templateUrl: './headerclient.component.html',
  styleUrls: ['./headerclient.component.scss']
})
export class HeaderclientComponent {
  isMenuOpen = false;
  loggedInUsername: string = ""; 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  closeMenu() {
    this.isMenuOpen = false; 
  }
}


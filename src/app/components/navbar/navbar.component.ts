import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  toggleClicked : boolean = false;

  openNav():void {
    this.toggleClicked = true;
  }
  closeNav(elem : MouseEvent){
    const t = elem.target as HTMLElement;
    if (t.getAttribute("role") == "close") {

      this.toggleClicked = false;
    }
  }
  
}

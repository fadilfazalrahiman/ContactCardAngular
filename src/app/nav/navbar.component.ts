import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { ContactService } from '../contacts/shared/contacts.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active {color: #F97924;}
    `]
})
export class NavBarComponent {
  title = 'ng-fundamentals';
  
  constructor(private contactService: ContactService) {
  }
}

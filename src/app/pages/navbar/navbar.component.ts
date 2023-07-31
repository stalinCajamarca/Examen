import { Component } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(valido:AuthService){
    
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router : Router, private localStoragwService: LocalStorageService){}

  iniciarSesion() {

    this.authService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.localStoragwService.setItem('user', response.user);
        this.router.navigate(['/dashboard']);
      })
      .catch(error => console.log(error));
  }
  
}

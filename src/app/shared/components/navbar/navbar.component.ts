import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User | null = null;

  constructor(private authService: AuthService, 
              private router : Router, 
              private auth: Auth, 
              private localStorageService: LocalStorageService){}

  ngOnInit(): void {
    this.loadInit()
  }

  loadInit() {
    this.user = this.localStorageService.getItem('user');
  }

  logout() {
    this.authService.logout()
      .then(some => {
        this.localStorageService.clear();
        this.user = null;
        this.router.navigate(['/dashboard']);
      })
      .catch(console.error);
  }
}

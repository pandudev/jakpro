import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigateByUrl('/');
  }
}

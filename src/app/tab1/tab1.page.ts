import { Component } from '@angular/core';
import { AuthGuard } from '../core/auth/auth-guard.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private authGuard: AuthGuard) { }

  logout() {
    this.authGuard.logout();
  }
}

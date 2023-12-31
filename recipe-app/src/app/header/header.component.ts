import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
   this.userSub =  this.authService.user.subscribe(user =>{
    this.isAuthenticated = !!user
    console.log(!user)
    console.log(!!user)
   })
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}

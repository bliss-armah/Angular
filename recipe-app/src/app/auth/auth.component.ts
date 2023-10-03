import { AlertComponent } from './../shared/alert/alert.component';
import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {
  isLoggedIn = true;
  isLoading = false;
  error: string = null;

  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost: PlaceHolderDirective;

   private closeSub : Subscription

  constructor(
    private authServiece: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoggedIn) {
      authObs = this.authServiece.login(email, password);
    } else {
      authObs = this.authServiece.signUp(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        // this.showErrowAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }
  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe()
    }
  }

//   private showErrowAlert(message: string) {
//     // const alertcmp = new AlertComponent()
//     const alertCmpFactory =
//       this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
//     const hostViewContainerRef = this.alertHost.viewContainerRef;
//     hostViewContainerRef.clear();

//    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
//    componentRef.instance.message = message;
//    this.closeSub = componentRef.instance.close.subscribe(() => {
//      this.closeSub.unsubscribe()
//      hostViewContainerRef.clear();
//    })
//   }
}

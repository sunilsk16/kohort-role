import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { AlertService } from '../_services/alert.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { UserService } from '../_services/user/user.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  email: any;
  password: any;
  currentUser: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private userService: UserService,
    public authService: AuthService) { }

  ngOnInit() {
    this.email = "";
    this.password = '';
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: true
    });
    // Remember Me
    if (localStorage.getItem('remember')) {
      // this.renderer.removeClass(document.body, 'bg-full-screen-image');
      localStorage.removeItem('currentLayoutStyle');
      this.router.navigate(['/dashboard']);
    } else if (localStorage.getItem('currentUser')) {
      // Force logout on login if not remember me
      // this.authService.doLogout();
      // this.isPageLoaded = true;
    } else {
      // this.isPageLoaded = true;
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  tryLogin() {

    this.spinner.show();
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.spinner.hide();
      return;
    }
    const value = {
      email: this.f.email.value,
      password: this.f.password.value
    };
    this.authService.doLogin(value)
      .then(res => {
        console.log('after login ', res);
        // this.setUserInStorage(res);
        this.getCurrentUser(res.user.uid)
          .then(() => {
            if (this.currentUser && this.currentUser.id && !this.currentUser.mailVerified) {
              this.currentUser.mailVerified = true;
              this.spinner.hide();
              localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
              this.userService.updateUser(this.currentUser.id, this.currentUser)
            }
            if (this.currentUser.isActive) {
              localStorage.removeItem('currentLayoutStyle');
              this.spinner.hide();
              let returnUrl = '/dashboard';
              if (this.returnUrl) {
                returnUrl = this.returnUrl;
              }
              this.userService
              .getUserRole(this.currentUser.roleValue)
              .subscribe((res: any) => {
                console.log("curr user permissions ", res);

                if (res && res.length) {
                  window.localStorage.setItem(
                    "permissions",
                    JSON.stringify(res[0].permissions)
                  );
                  this.router.navigate([returnUrl]);
                }
            
              });
            } else {
              this.spinner.hide();
              this.submitted = false;
              this.alertService.showError('Account has been suspended !!', '5000', 'Contact Admin');
            }
          })
      }, err => {
        this.spinner.hide();
        this.submitted = false;
        this.alertService.error(err.message);
      });
  }

  setUserInStorage(res) {
    if (res.user) {
      localStorage.setItem('currentUser', JSON.stringify(res.user));
    } else {
      localStorage.setItem('currentUser', JSON.stringify(res));
    }
  }

  simpleAlert() {
    Swal.fire('forget password');
  }

  getCurrentUser(uid: any) {
    return new Promise((resolve) => {
      this.userService.getUserById(uid)
        .then((res: any) => {
          console.log('user after :: login ', res);
          if (res && res.length) {
            this.currentUser = res[0];
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
          }
          resolve();
        })
    })
  }
}

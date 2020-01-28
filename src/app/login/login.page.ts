import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  myForm: FormGroup;
  show = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formInit();
  }

  ionViewDidLeave() {
    this.myForm.reset();
  }

  formInit() {
    this.myForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  showPassword() {
    this.show = this.show === false ? true : false;
  }

  async login() {
    if (this.myForm.invalid) {
      Object.keys(this.myForm.controls).forEach(key => {
        if (this.myForm.controls[key].invalid) {
          this.myForm.controls[key].markAsTouched({ onlySelf: true });
        }
      });
      return;
    }
    localStorage.setItem('token', '123456789');
    this.router.navigate(['/tabs']);
  }
}

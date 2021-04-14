import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CryptoUtil } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  returnUrl:string;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/car';
  }

  submit() {
    if (!this.form.invalid) {
      const formValue = this.form.getRawValue();
      formValue.password = this.encryptPassword();

      this.authService.login(formValue).subscribe(
        (result) => {
          this.router.navigateByUrl(this.returnUrl);
        },
        (error) => {
          this.router.navigate(['/login']);
        }
      );
    }
  }

  encryptPassword() {
    const password = this.form.get('password').value;
    return CryptoUtil.CryptoPassword(password);
  }
}

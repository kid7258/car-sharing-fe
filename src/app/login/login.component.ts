import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (!this.form.invalid) {
      this.authService.login(this.form.value).subscribe(
        (result) => {
          this.router.navigate(['/']);
        },
        (error) => {
          this.router.navigate(['/login']);
        }
      );
    }
  }
}

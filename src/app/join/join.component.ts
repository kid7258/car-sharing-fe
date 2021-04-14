import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { IUserRole } from '../shared/enums';
import { CryptoUtil } from '../utils';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    department: new FormControl(''),
    role: new FormControl(IUserRole.USER)
  });

  constructor(private memberSerivce: MemberService, private route: Router) {}

  ngOnInit(): void {}

  submit(): void {
    const formValue = this.form.getRawValue();
    const password = this.form.get('password').value;
    formValue.password = CryptoUtil.CryptoPassword(password);

    this.memberSerivce.join(formValue).subscribe((result) => {
      this.route.navigate(['/login']);
    });
  }
}

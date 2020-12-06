import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private memberSerivce: MemberService, private route: Router) {}

  ngOnInit(): void {}

  submit() {
    this.memberSerivce.join(this.form.value).subscribe((result) => {
      this.route.navigate(['/login']);
    });
  }
}

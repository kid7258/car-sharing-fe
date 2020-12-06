import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

export interface Member {
  id: number;
  email: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'username'];
  dataSource: Member[];
  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data) => {
      this.dataSource = data;
    });
  }
}

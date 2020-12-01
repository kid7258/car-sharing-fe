import { Component, OnInit } from '@angular/core';

export interface Member {
  id: number;
  email: string;
  username: string;
  password?: string;
}

const MEMBERS: Member[] = [
  { id: 1, email: 'kid7258@naver.com', username: '공기경' },
  { id: 2, email: 'kid7258@gmail.com', username: '공기경' },
];
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'username'];
  dataSource = MEMBERS;
  constructor() {}

  ngOnInit(): void {}
}

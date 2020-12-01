import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'board', component: BoardComponent },
      { path: 'member', component: MemberComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BoardFormComponent } from './board/board-form/board-form.component';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'car' },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'car', component: BoardComponent },
      { path: 'car/new', component: BoardFormComponent },
      { path: 'member', component: MemberComponent}
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

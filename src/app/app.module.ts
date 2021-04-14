import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './board/board.component';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JoinComponent } from './join/join.component';
import { BoardFormComponent } from './board/board-form/board-form.component';
import { BackButtonDirective } from './directives/back-button.directive';

export function tokenGetter() {
  return localStorage.getItem('accessToken');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BoardComponent,
    MemberComponent,
    LoginComponent,
    JoinComponent,
    BoardFormComponent,
    BackButtonDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

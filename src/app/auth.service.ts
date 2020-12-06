import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly API = '/api';
  // https://poiemaweb.com/angular-jwt-authentication
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(loginInfo: any): Observable<any> {
    return this.http.post<any>(`${this.API}/login`, loginInfo).pipe(
      tap((res) => this.setToken(res['accessToken'])),
      shareReplay()
    );
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }

  setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string {
    return localStorage.getItem('accessToken');
  }

  isTokenExpired(token: string) {
    return this.jwtHelper.isTokenExpired(token);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  getUserId(): string {
    return this.jwtHelper.decodeToken(this.getToken()).id;
  }
}

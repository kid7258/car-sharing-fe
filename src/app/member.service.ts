import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  readonly API = 'http://localhost:8080';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMemberById(id: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.authService.getToken()
    );

    return this.http
      .get<any>(`${this.API}/member/${id}`, { headers })
      .pipe(shareReplay());
  }

  getMembers(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.authService.getToken()
    );

    return this.http.get<any>(`${this.API}/member`, { headers });
  }

  join(memberInfo: any): Observable<any> {
    return this.http.post<any>(`${this.API}/join`, memberInfo);
  }
}

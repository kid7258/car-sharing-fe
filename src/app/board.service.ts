import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  readonly API = 'http://localhost:8080';

  constructor(private http: HttpClient, private authService: AuthService) {}

  create(boardInfo): Observable<any> {

    const headers = new HttpHeaders().set(
      'Authorization',
      this.authService.getToken()
    );

    return this.http.post<any>(`${this.API}/cars`, boardInfo, { headers });
  }
}

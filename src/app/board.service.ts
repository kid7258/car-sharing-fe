import { HttpClient } from '@angular/common/http';
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
    return this.http.post<any>(`${this.API}/board`, boardInfo);
  }
}

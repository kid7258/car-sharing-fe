import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { memory } from 'console';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  readonly API = '/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  create(boardInfo): Observable<any> {
    return this.http.post<any>(`${this.API}/board`, boardInfo);
  }
}

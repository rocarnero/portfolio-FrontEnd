import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uri: string = 'http://localhost:8080';
  token: any;
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    this.http
      .post(this.uri + '/login', { username, password })
      .subscribe((resp: any) => {
        if (!resp) {
          return;
        }
        localStorage.setItem('token', resp.token);
        window.location.reload();
      });
  }

  logout() {
    localStorage.removeItem('token');
    //window.location.reload();
  }

  public get isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}

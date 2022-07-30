import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {}

  getUserBySlug(slug: String) {
    return this.httpClient.get(`${this.url}${slug}`);
  }

  updateUserBySlug(slug: String, data: any) {
    return this.httpClient.put(`${this.url}${slug}`, data);
  }
}

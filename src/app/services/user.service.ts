import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://carnerorocio-portfolio-back.herokuapp.com';

  constructor(private httpClient: HttpClient) {}

  getUserBySlug(slug: String) {
    return this.httpClient.get(`${this.url}/${slug}`);
  }

  updateUserBySlug(slug: String, data: any) {
    return this.httpClient.put(`${this.url}/${slug}`, data);
  }
}

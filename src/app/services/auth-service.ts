import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private user = {
    username: 'johndoe',
    role: 'admin'  // change to 'admin' to simulate an admin
  };

  isLoggedIn(): boolean {
    return !!this.user;
  }

  getUserRole(): string {
    // const fundsJsonUrl = 'assets/user.json'; 
    // return this.http.get<any>(fundsJsonUrl);
    return this.user.role;
  }

  setRole(role: string) {
    this.user.role = role;
  }
}

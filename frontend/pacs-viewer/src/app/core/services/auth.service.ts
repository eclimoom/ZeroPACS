import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subscribable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiPrefix = environment.apiPrefix;
  userData: any;
  constructor(public router: Router, private http: HttpClient) {
    console.log('apiPrefix', this.apiPrefix);
  }
  // Returns true when user is login in and have token
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);

    return user && user.access_token ? true : false;
  }

  login(payload: any): any {
    return this.http
      .post<any>(`${this.apiPrefix}/oauth/login-v2`, payload)
      .pipe(
        map((result) => {
          // const { data, success } = result;
          // if (success) {
          // 判断是否有权限 没有权限 success 返回 false
          // }
          return result;
        })
      );
  }

  // Sign out
  signOut() {
    this.router.navigate(['login']).then();
  }
}

import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { map, Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(
    // public afAuth: AngularFireAuth,
    public router: Router,
    // public ngZone: NgZone, // NgZone service to remove outside scope warning
    private http: HttpClient
  ) {
    // Setting logged in user in localstorage else null
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user')!);
    //   } else {
    //     localStorage.setItem('user', 'null');
    //     JSON.parse(localStorage.getItem('user')!);
    //   }
    // });
  }
  // Returns true when user is login in and have token
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);

    return user && user.token ? true : false;
  }

  login(payload: any): any {
    return this.http.post<any>('/oauth/login-v2', payload)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }


  // Sign out
  signOut() {
      localStorage.removeItem('user');
      this.router.navigate(['login']).then();
  }
}

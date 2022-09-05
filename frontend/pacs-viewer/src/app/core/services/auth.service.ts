import {Injectable, NgZone} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(
    // public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
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
  // Sign out
  signOut() {
      localStorage.removeItem('user');
      this.router.navigate(['login']).then();
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// eslint-disable-next-line @ngrx/select-style
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { selectUserInfo } from '../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
    private store: Store
  ) {}
  canActivate(): any {
    return this.store.pipe(
      // eslint-disable-next-line @ngrx/select-style
      select(selectUserInfo),
      tap((userInfo: any) => {
        // console.log('userInfo:', userInfo);
        if (!userInfo) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}

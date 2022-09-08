import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserInfo } from 'src/app/core/store/auth/auth.selectors';
import { User } from 'src/app/models/user';
import { logout } from 'src/app/core/store/auth/auth.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(private store: Store) {}
  userInfo$: Observable<User | undefined> | undefined;
  ngOnInit(): void {
    this.userInfo$ = this.store.select(selectUserInfo);
    console.log('environments', environment.apiPrefix);
  }

  logout() {
    this.store.dispatch(logout());
  }
}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/core/store/auth/auth.selectors';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(private store: Store) {}
  userInfo$: User | undefined;
  ngOnInit(): void {
    this.store.pipe(select(selectUserInfo)).subscribe((data) => {
      console.log(data);
      this.userInfo$ = data;
    });
  }
}

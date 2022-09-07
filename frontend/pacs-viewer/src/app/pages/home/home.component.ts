import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/core/store/auth/auth.reducer';
import { selectUserInfo } from 'src/app/core/store/auth/auth.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}
  // userInfo$ = this.store.select(selectUserInfo);

  ngOnInit(): void {
    // console.log(444, this.userInfo$);
  }
}

// export class AuthSelector {
// }

import { createFeatureSelector } from '@ngrx/store';
import { User } from '../models/user';

export const selectAuth = createFeatureSelector<User>('user');

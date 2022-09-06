import { User } from './models/user';

export interface AppState {
  apiStatus: string;
  apiResponseMessage: string;
  userInfo: User | null;
}

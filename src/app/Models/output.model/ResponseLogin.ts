import { ResponseBase } from './ResponseBase';

export class ResponseLogin extends ResponseBase {
  token: string;
  Info: UserInfo;
}
export class UserInfo {
  user_id: number;
  userName: string;
  totalAmount: number;
  phone: string;
  image: string;
  gender_name: string;
  fullName: string;
  accountType_id: number;
  accountType_name: string;
}

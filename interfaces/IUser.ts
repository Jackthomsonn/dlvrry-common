import { Role } from './../enums/role/index';
import { VerificationStatus } from './../enums/verification_status/index';

export interface IUser {
  readonly id: string;
  name: string;
  email: string;
  role: Role,
  connected_account_id: string;
  account_link_url: string;
  customer_id: string;
  verification_status: VerificationStatus;
  verified: boolean;
}

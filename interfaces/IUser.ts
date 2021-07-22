import { AccountType } from "./../enums/account_type/index";
import { ModeType } from "./../enums/mode_type/index";
import { VerificationStatus } from "./../enums/verification_status/index";

export interface IUser {
  id: string;
  name: string;
  email: string;
  account_type: AccountType;
  customer_id: string;
  verification_status: VerificationStatus;
  verified: boolean;
  cancelled_jobs?: number;
  mode?: ModeType;
  connected_account_id?: string;
  account_link_url?: string;
  push_token?: string;
  last_cancelled_job_date?: string;
}

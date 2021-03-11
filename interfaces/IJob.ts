import * as admin from 'firebase-admin';

import { JobStatus } from '../enums/job_status';

export interface IJob {
  id?: string;
  created: string;
  owner_name: string;
  owner_id: string;
  rider_id: string;
  customer_location: admin.firestore.GeoPoint;
  pickup_location: admin.firestore.GeoPoint;
  number_of_items: number;
  payout: number;
  cost: number;
  customer_location_name: string;
  status?: JobStatus;
  charge_id?: string;
  complete_payment_link?: string;
  complete_payment_method_link?: string;
  payment_captured: boolean;
}

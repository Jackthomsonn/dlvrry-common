import * as admin from 'firebase-admin';

import { JobStatus } from '../enums/status';

export interface IJob {
  readonly id: string;
  owner_name: string;
  owner_id: string;
  rider_id: string;
  customer_location: admin.firestore.GeoPoint;
  pickup_location: admin.firestore.GeoPoint;
  number_of_items: number;
  payout: number;
  cost: number;
  status: JobStatus;
}

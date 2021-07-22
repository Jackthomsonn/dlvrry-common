import * as admin from "firebase-admin";

import { JobStatus } from "../enums/job_status";

export interface IJob {
  id: string;
  created: string;
  owner_name: string;
  owner_id: string;
  number_of_items: number;
  phone_number: string;
  payout: number;
  cost: number;
  status: JobStatus;
  customer_location: admin.firestore.GeoPoint;
  customer_location_name: string;
  pickup_location: admin.firestore.GeoPoint;
  pickup_location_name: string;
  rider_id?: string;
  charge_id?: string;
  complete_payment_link?: string;
  complete_payment_method_link?: string;
  payment_captured?: boolean;
}

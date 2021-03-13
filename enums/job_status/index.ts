export enum JobStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  REFUNDED = 'refunded',
  CANCELLED_BY_RIDER = 'cancelled_by_rider',
  CANCELLED_BY_OWNER = 'cancelled_by_owner',
  AWAITING_PAYMENT = 'awaiting_payment',
  PAYMENT_FAILED = 'payment_failed',
}

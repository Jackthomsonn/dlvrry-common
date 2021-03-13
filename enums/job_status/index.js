"use strict";
exports.__esModule = true;
exports.JobStatus = void 0;
var JobStatus;
(function (JobStatus) {
    JobStatus["PENDING"] = "pending";
    JobStatus["IN_PROGRESS"] = "in_progress";
    JobStatus["COMPLETED"] = "completed";
    JobStatus["REFUNDED"] = "refunded";
    JobStatus["CANCELLED_BY_RIDER"] = "cancelled_by_rider";
    JobStatus["CANCELLED_BY_OWNER"] = "cancelled_by_owner";
    JobStatus["AWAITING_PAYMENT"] = "awaiting_payment";
    JobStatus["PAYMENT_FAILED"] = "payment_failed";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));

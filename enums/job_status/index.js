"use strict";
exports.__esModule = true;
exports.JobStatus = void 0;
var JobStatus;
(function (JobStatus) {
    JobStatus["PENDING"] = "pending";
    JobStatus["IN_PROGRESS"] = "in_progress";
    JobStatus["COMPLETED"] = "completed";
    JobStatus["CANCELLED"] = "cancelled";
    JobStatus["REFUNDED"] = "refunded";
    JobStatus["CANCELLED_BY_OWNER"] = "cancelled_by_owner";
    JobStatus["AWAITING_PAYMENT"] = "awaiting_payment";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));

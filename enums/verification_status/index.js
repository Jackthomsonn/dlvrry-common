"use strict";
exports.__esModule = true;
exports.VerificationStatus = void 0;
var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus["COMPLETE"] = "complete";
    VerificationStatus["FAILED"] = "failed";
    VerificationStatus["CANCELLED"] = "cancelled";
    VerificationStatus["PENDING"] = "pending";
    VerificationStatus["PENDING_VERIFICATION"] = "pending_verification";
    VerificationStatus["PAST_DUE"] = "past_due";
    VerificationStatus["REJECTED_FRAUDULENT"] = "fraud";
    VerificationStatus["REJECTED_TERMS_OF_SERVICE"] = "terms_of_service";
    VerificationStatus["REJECTED_LISTED"] = "rejected_listed";
    VerificationStatus["REJECTED_OTHER"] = "rejected_other";
    VerificationStatus["LISTED"] = "listed";
    VerificationStatus["UNDER_REVIEW"] = "under_review";
    VerificationStatus["OTHER"] = "other";
})(VerificationStatus = exports.VerificationStatus || (exports.VerificationStatus = {}));

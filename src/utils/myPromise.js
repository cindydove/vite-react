const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {
    constructor(callback) {
        callback(this.resolve, this.reject);
    }
    status = PENDING;
    value = null;
    reason = null;
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
        }
    };
    reject = (value) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = value;
        }
    };
    then(fulfilledCB, rejectedCB) {
        if (this.status === FULFILLED) {
            fulfilledCB(this.value);
        }
        if (this.status === REJECTED) {
            rejectedCB(this.reason);
        }
    }
}

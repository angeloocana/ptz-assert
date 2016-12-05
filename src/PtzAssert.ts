import { ok, equal, deepEqual, notEqual, notDeepEqual, throws } from "assert";

function notOk(value: any, message?: string) {
    return ok(!value, message);
}

export {
    ok, notOk, equal, deepEqual, notEqual, notDeepEqual, throws     
}


import { ok, equal, deepEqual, notEqual, notDeepEqual } from "assert";

var PtzAssert: IPtzAssert;
PtzAssert = class PtzAssert {
    static ok = ok;

    static notOk(value: any, message: string) {
        return ok(!value, message);
    }

    static equal = equal;
    static notEqual = notEqual;

    static deepEqual = deepEqual;
    static notDeepEqual = notDeepEqual;
}

export default PtzAssert;
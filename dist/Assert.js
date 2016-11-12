import { ok, equal, deepEqual } from "assert";
export default class PtzAssert {
    static notOk(value, message) {
        return ok(!value, message);
    }
}
PtzAssert.ok = ok;
PtzAssert.equal = equal;
PtzAssert.deepEqual = deepEqual;
//# sourceMappingURL=Assert.js.map
import { ok, equal, deepEqual } from "assert";
var PtzAssert;
PtzAssert = (PtzAssert_1 = class PtzAssert {
        static notOk(value, message) {
            return ok(!value, message);
        }
    },
    PtzAssert_1.ok = ok,
    PtzAssert_1.equal = equal,
    PtzAssert_1.deepEqual = deepEqual,
    PtzAssert_1);
export default PtzAssert;
var PtzAssert_1;
//# sourceMappingURL=PtzAssert.js.map
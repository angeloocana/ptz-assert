import { ok, equal, deepEqual, notEqual, notDeepEqual, throws } from "assert";

function notOk(value: any, message?: string) {
    return ok(!value, message);
}

function contains(list: any[], item:any){
    return ok(list.indexOf(item) >= 0);
}

export {
    ok, notOk, equal, deepEqual, notEqual, notDeepEqual, throws, contains     
}


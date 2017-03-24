import { ok, equal, deepEqual, notEqual, notDeepEqual, throws } from "assert";

function notOk(value: any, message?: string) {
    return ok(!value, message);
}

function contains(list: any[], item: any, errorMsg?: string) {
    return ok(list.indexOf(item) >= 0, errorMsg);
}

function containsNTimes(list: any[], item: any, nTimes: number, errorMsg?: string) {
    return equal(list.filter(x => x == item).length, nTimes, errorMsg);
}

function notContains(list: any[], item: any, errorMsg?: string) {
    if (!list)
        return;

    return notOk(list.indexOf(item) >= 0, errorMsg);
}

function notEmptyString(text) {
    if (!text)
        throw 'ERROR_NULL_REQUIRED_STRING';

    if (typeof text != 'string')
        throw 'ERROR_NOT_A_STRING';

    if (!(text.length > 0))
        throw 'ERROR_NULL_REQUIRED_STRING';
}

function notEmptyArray(list: any[]) {
    if (!list)
        throw 'ERROR_NULL_REQUIRED_ARRAY';

    if (list.length < 1)
        throw 'ERROR_EMPTY_REQUIRED_ARRAY';
}

function emptyArray(list: any[]) {
    if (list && list.length > 0)
        throw 'ERROR_ARRAY_MUST_BE_EMPTY';
}

export {
    ok,
    notOk,
    equal,
    deepEqual,
    notEqual,
    notDeepEqual,
    throws,
    contains,
    containsNTimes,
    notContains,
    notEmptyString,
    notEmptyArray,
    emptyArray
}

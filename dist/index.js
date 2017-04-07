import { deepEqual, equal, notDeepEqual, notEqual, ok, throws } from 'assert';
function notOk(value, message) {
    return ok(!value, message);
}
function contains(list, item, errorMsg) {
    return ok(list.indexOf(item) >= 0, errorMsg);
}
function containsNTimes(list, item, nTimes, errorMsg) {
    return equal(list.filter(x => x === item).length, nTimes, errorMsg);
}
function notContains(list, item, errorMsg) {
    if (!list)
        return;
    return notOk(list.indexOf(item) >= 0, errorMsg);
}
function notEmptyString(text) {
    if (!text)
        throw 'ERROR_NULL_REQUIRED_STRING';
    if (typeof text !== 'string')
        throw 'ERROR_NOT_A_STRING';
    if (!(text.length > 0))
        throw 'ERROR_NULL_REQUIRED_STRING';
}
function notEmptyArray(list) {
    if (!list)
        throw 'ERROR_NULL_REQUIRED_ARRAY';
    if (list.length < 1)
        throw 'ERROR_EMPTY_REQUIRED_ARRAY';
}
function emptyArray(list) {
    if (list && list.length > 0)
        throw 'ERROR_ARRAY_MUST_BE_EMPTY';
}
export { ok, notOk, equal, deepEqual, notEqual, notDeepEqual, throws, contains, containsNTimes, notContains, notEmptyString, notEmptyArray, emptyArray };
//# sourceMappingURL=index.js.map
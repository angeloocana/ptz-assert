import { deepEqual, equal, notDeepEqual, notEqual, ok, throws } from 'assert';

function notOk(value: any, errorMsg?: string) {
    return ok(!value, errorMsg);
}

function contains(list: any[], item: any, errorMsg?: string) {
    return ok(list.indexOf(item) >= 0, errorMsg);
}

function containsNTimes(list: any[], item: any, nTimes: number, errorMsg?: string) {
    return equal(list.filter(x => x === item).length, nTimes, errorMsg);
}

function notContains(list: any[], item: any, errorMsg?: string) {
    if (!list)
        return;

    return notOk(list.indexOf(item) >= 0, errorMsg);
}

type IFindPredicate = (value: any, index: number, obj: any[]) => boolean;

function containsFind(list: any[], predicate: IFindPredicate, errorMsg?: string) {
    const index = list.findIndex(predicate);
    return ok(index >= 0, errorMsg);
}

function notContainsFind(list: any[], predicate: IFindPredicate, errorMsg?: string) {
    if (!list)
        return;

    const index = list.findIndex(predicate);
    return notOk(index >= 0, errorMsg);
}

function notEmptyString(text, errorMsg?: string) {
    if (!text)
        throw errorMsg ? errorMsg : 'ERROR_NULL_REQUIRED_STRING';

    if (typeof text !== 'string')
        throw errorMsg ? errorMsg : 'ERROR_NOT_A_STRING';

    if (!(text.length > 0))
        throw errorMsg ? errorMsg : 'ERROR_NULL_REQUIRED_STRING';
}

function notEmptyArray(list: any[], errorMsg?: string) {
    if (!list)
        throw errorMsg ? errorMsg : 'ERROR_NULL_REQUIRED_ARRAY';

    if (list.length < 1)
        throw errorMsg ? errorMsg : 'ERROR_EMPTY_REQUIRED_ARRAY';
}

function emptyArray(list: any[], errorMsg?: string) {
    if (list && list.length > 0)
        throw errorMsg ? errorMsg : 'ERROR_ARRAY_MUST_BE_EMPTY';
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
    containsFind,
    containsNTimes,
    notContains,
    notContainsFind,
    notEmptyString,
    notEmptyArray,
    emptyArray
}

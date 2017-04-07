'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.emptyArray = exports.notEmptyArray = exports.notEmptyString = exports.notContains = exports.containsNTimes = exports.contains = exports.throws = exports.notDeepEqual = exports.notEqual = exports.deepEqual = exports.equal = exports.notOk = exports.ok = undefined;

var _assert = require('assert');

function notOk(value, message) {
    return (0, _assert.ok)(!value, message);
}
function contains(list, item, errorMsg) {
    return (0, _assert.ok)(list.indexOf(item) >= 0, errorMsg);
}
function containsNTimes(list, item, nTimes, errorMsg) {
    return (0, _assert.equal)(list.filter(function (x) {
        return x === item;
    }).length, nTimes, errorMsg);
}
function notContains(list, item, errorMsg) {
    if (!list) return;
    return notOk(list.indexOf(item) >= 0, errorMsg);
}
function notEmptyString(text) {
    if (!text) throw 'ERROR_NULL_REQUIRED_STRING';
    if (typeof text !== 'string') throw 'ERROR_NOT_A_STRING';
    if (!(text.length > 0)) throw 'ERROR_NULL_REQUIRED_STRING';
}
function notEmptyArray(list) {
    if (!list) throw 'ERROR_NULL_REQUIRED_ARRAY';
    if (list.length < 1) throw 'ERROR_EMPTY_REQUIRED_ARRAY';
}
function emptyArray(list) {
    if (list && list.length > 0) throw 'ERROR_ARRAY_MUST_BE_EMPTY';
}
exports.ok = _assert.ok;
exports.notOk = notOk;
exports.equal = _assert.equal;
exports.deepEqual = _assert.deepEqual;
exports.notEqual = _assert.notEqual;
exports.notDeepEqual = _assert.notDeepEqual;
exports.throws = _assert.throws;
exports.contains = contains;
exports.containsNTimes = containsNTimes;
exports.notContains = notContains;
exports.notEmptyString = notEmptyString;
exports.notEmptyArray = notEmptyArray;
exports.emptyArray = emptyArray;
//# sourceMappingURL=index.js.map
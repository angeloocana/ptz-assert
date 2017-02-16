'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notEmptyString = exports.notContains = exports.contains = exports.throws = exports.notDeepEqual = exports.notEqual = exports.deepEqual = exports.equal = exports.notOk = exports.ok = undefined;

var _assert = require('assert');

function notOk(value, message) {
    return (0, _assert.ok)(!value, message);
}
function contains(list, item) {
    return (0, _assert.ok)(list.indexOf(item) >= 0);
}
function notContains(list, item) {
    if (!list) return;
    return notOk(list.indexOf(item) >= 0);
}
function notEmptyString(text) {
    if (!text) throw 'ERROR_NULL_REQUIRED_STRING';
    if (typeof text != 'string') throw 'ERROR_NOT_A_STRING';
    if (!(text.length > 0)) throw 'ERROR_EMPTY_REQUIRED_STRING';
}
exports.ok = _assert.ok;
exports.notOk = notOk;
exports.equal = _assert.equal;
exports.deepEqual = _assert.deepEqual;
exports.notEqual = _assert.notEqual;
exports.notDeepEqual = _assert.notDeepEqual;
exports.throws = _assert.throws;
exports.contains = contains;
exports.notContains = notContains;
exports.notEmptyString = notEmptyString;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notDeepEqual = exports.notEqual = exports.deepEqual = exports.equal = exports.notOk = exports.ok = undefined;

var _assert = require("assert");

function notOk(value, message) {
    return (0, _assert.ok)(!value, message);
}
exports.ok = _assert.ok;
exports.notOk = notOk;
exports.equal = _assert.equal;
exports.deepEqual = _assert.deepEqual;
exports.notEqual = _assert.notEqual;
exports.notDeepEqual = _assert.notDeepEqual;
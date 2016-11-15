"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _assert = require("assert");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PtzAssert;
PtzAssert = (PtzAssert_1 = function () {
    function PtzAssert() {
        _classCallCheck(this, PtzAssert);
    }

    _createClass(PtzAssert, null, [{
        key: "notOk",
        value: function notOk(value, message) {
            return (0, _assert.ok)(!value, message);
        }
    }]);

    return PtzAssert;
}(), PtzAssert_1.ok = _assert.ok, PtzAssert_1.equal = _assert.equal, PtzAssert_1.notEqual = _assert.notEqual, PtzAssert_1.deepEqual = _assert.deepEqual, PtzAssert_1.notDeepEqual = _assert.notDeepEqual, PtzAssert_1);
exports.default = PtzAssert;

var PtzAssert_1;
"use strict";

var _PtzAssert = require("../PtzAssert");

var _PtzAssert2 = _interopRequireDefault(_PtzAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Assert", function () {
    describe("ok", function () {
        it("true", function () {
            _PtzAssert2.default.ok(true);
        });
        it("false", function () {
            var threw = false;
            try {
                _PtzAssert2.default.ok(false);
            } catch (ex) {
                threw = true;
            } finally {
                if (!threw) throw "not threw an exception";
            }
        });
    });
});
"use strict";

var _PtzAssert = require("../PtzAssert");

var mustThrewException = function mustThrewException(exec) {
    var threw = false;
    try {
        exec();
    } catch (ex) {
        threw = true;
    } finally {
        if (!threw) throw "not threw an exception";
    }
};
describe("Assert", function () {
    describe("ok", function () {
        it("null", function () {
            mustThrewException(function () {
                (0, _PtzAssert.ok)(null);
            });
        });
        it("undefined", function () {
            mustThrewException(function () {
                (0, _PtzAssert.ok)(undefined);
            });
        });
        it("false", function () {
            mustThrewException(function () {
                (0, _PtzAssert.ok)(false);
            });
        });
        it("true", function () {
            (0, _PtzAssert.ok)(true);
        });
        it("obj", function () {
            (0, _PtzAssert.ok)({ hi: "hi" });
        });
    });
    describe("notOk", function () {
        it("null", function () {
            (0, _PtzAssert.notOk)(null);
        });
        it("undefined", function () {
            (0, _PtzAssert.notOk)(undefined);
        });
        it("false", function () {
            (0, _PtzAssert.notOk)(false);
        });
        it("true", function () {
            mustThrewException(function () {
                (0, _PtzAssert.notOk)(true);
            });
        });
        it("obj", function () {
            mustThrewException(function () {
                (0, _PtzAssert.notOk)({ hi: "hi" });
            });
        });
    });
    describe("equal", function () {
        it("true", function () {
            var a = { hi: "hi" };
            var b = a;
            (0, _PtzAssert.equal)(a, b);
        });
        it("false", function () {
            var a = { hi: "hi" };
            var b = { hello: "hello" };
            mustThrewException(function () {
                (0, _PtzAssert.equal)(a, b);
            });
        });
    });
    describe("notEqual", function () {
        it("true", function () {
            var a = { hi: "hi" };
            var b = a;
            mustThrewException(function () {
                (0, _PtzAssert.notEqual)(a, b);
            });
        });
        it("false", function () {
            var a = { hi: "hi" };
            var b = { hello: "hello" };
            (0, _PtzAssert.notEqual)(a, b);
        });
    });
    describe("deepEqual", function () {
        it("true", function () {
            var a = { hi: "hi" };
            var b = { hi: "hi" };
            (0, _PtzAssert.deepEqual)(a, b);
        });
        it("false", function () {
            var a = { hi: "hi" };
            var b = { hello: "hello" };
            mustThrewException(function () {
                (0, _PtzAssert.deepEqual)(a, b);
            });
        });
    });
    describe("notDeepEqual", function () {
        it("true", function () {
            var a = { hi: "hi" };
            var b = { hello: "hello" };
            (0, _PtzAssert.notDeepEqual)(a, b);
        });
        it("false", function () {
            var a = { hi: "hi" };
            var b = { hi: "hi" };
            mustThrewException(function () {
                (0, _PtzAssert.notDeepEqual)(a, b);
            });
        });
    });
});
import { ok, notOk, equal, notEqual, deepEqual, notDeepEqual, throws, contains } from "../PtzAssert";

let mustThrewException = function (exec) {
    let threw = false;

    try {
        exec();
    }
    catch (ex) {
        threw = true;
    }
    finally {
        if (!threw)
            throw "not threw an exception"
    }
}

describe("Assert", () => {

    describe("ok", () => {

        it("null", () => {
            mustThrewException(() => {
                ok(null);
            });
        });
        it("undefined", () => {
            mustThrewException(() => {
                ok(undefined);
            });
        });
        it("false", () => {
            mustThrewException(() => {
                ok(false);
            });
        });
        it("true", () => {
            ok(true);
        });
        it("obj", () => {
            ok({ hi: "hi" });
        });
    });

    describe("notOk", () => {
        it("null", () => {
            notOk(null);
        });
        it("undefined", () => {
            notOk(undefined);
        });
        it("false", () => {
            notOk(false);
        });
        it("true", () => {
            mustThrewException(() => {
                notOk(true);
            });
        });
        it("obj", () => {
            mustThrewException(() => {
                notOk({ hi: "hi" });
            });
        });
    });

    describe("equal", () => {
        it("true", () => {
            let a = { hi: "hi" };
            let b = a;

            equal(a, b);
        });
        it("false", () => {
            let a = { hi: "hi" };
            let b = { hello: "hello" };

            mustThrewException(() => {
                equal(a, b);
            });
        });
    });


    describe("notEqual", () => {
        it("true", () => {
            let a = { hi: "hi" };
            let b = a;

            mustThrewException(() => {
                notEqual(a, b);
            });
        });
        it("false", () => {
            let a = { hi: "hi" };
            let b = { hello: "hello" };

            notEqual(a, b);
        });
    });


    describe("deepEqual", () => {
        it("true", () => {
            let a = { hi: "hi" };
            let b = { hi: "hi" };

            deepEqual(a, b);
        });

        it("false", () => {
            let a = { hi: "hi" };
            let b = { hello: "hello" };

            mustThrewException(() => {
                deepEqual(a, b);
            });
        });
    });

    describe("notDeepEqual", () => {
        it("true", () => {
            let a = { hi: "hi" };
            let b = { hello: "hello" };

            notDeepEqual(a, b);
        });

        it("false", () => {
            let a = { hi: "hi" };
            let b = { hi: "hi" };

            mustThrewException(() => {
                notDeepEqual(a, b);
            });
        });
    });

    describe("throw", ()=>{
        it("true",()=>{
            throws(function(){
                throw "Teste";
            });
        });
    });

    describe('contains', () => {
        it('true', ()=>{
            var list = ['a', 'b'];
            contains(list, 'a');
        });

        it('false', ()=>{
            var list = ['a', 'b'];
            mustThrewException(()=>{
                contains(list, 'c');            
            });
        });
    });
});

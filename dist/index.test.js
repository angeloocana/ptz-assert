'use strict';

var _index = require('./index');

var mustThrewException = function mustThrewException(exec, errorMsg) {
    var threw = false;
    try {
        exec();
    } catch (ex) {
        threw = true;
        if (errorMsg && ex !== errorMsg) throw 'not threw custom error msg: ' + errorMsg;
    } finally {
        if (!threw) throw 'not threw an exception'; // tslint:disable-line:no-unsafe-finally
    }
};
describe('ok', function () {
    it('null', function () {
        mustThrewException(function () {
            (0, _index.ok)(null);
        });
    });
    it('undefined', function () {
        mustThrewException(function () {
            (0, _index.ok)(undefined);
        });
    });
    it('false', function () {
        mustThrewException(function () {
            (0, _index.ok)(false);
        });
    });
    it('true', function () {
        (0, _index.ok)(true);
    });
    it('obj', function () {
        (0, _index.ok)({ hi: 'hi' });
    });
});
describe('notOk', function () {
    it('null', function () {
        (0, _index.notOk)(null);
    });
    it('undefined', function () {
        (0, _index.notOk)(undefined);
    });
    it('false', function () {
        (0, _index.notOk)(false);
    });
    it('true', function () {
        mustThrewException(function () {
            (0, _index.notOk)(true);
        });
    });
    it('obj', function () {
        mustThrewException(function () {
            (0, _index.notOk)({ hi: 'hi' });
        });
    });
});
describe('equal', function () {
    it('true', function () {
        var a = { hi: 'hi' };
        var b = a;
        (0, _index.equal)(a, b);
    });
    it('false', function () {
        var a = { hi: 'hi' };
        var b = { hello: 'hello' };
        mustThrewException(function () {
            (0, _index.equal)(a, b);
        });
    });
});
describe('notEqual', function () {
    it('true', function () {
        var a = { hi: 'hi' };
        var b = a;
        mustThrewException(function () {
            (0, _index.notEqual)(a, b);
        });
    });
    it('false', function () {
        var a = { hi: 'hi' };
        var b = { hello: 'hello' };
        (0, _index.notEqual)(a, b);
    });
});
describe('deepEqual', function () {
    it('true', function () {
        var a = { hi: 'hi' };
        var b = { hi: 'hi' };
        (0, _index.deepEqual)(a, b);
    });
    it('false', function () {
        var a = { hi: 'hi' };
        var b = { hello: 'hello' };
        mustThrewException(function () {
            (0, _index.deepEqual)(a, b);
        });
    });
});
describe('notDeepEqual', function () {
    it('true', function () {
        var a = { hi: 'hi' };
        var b = { hello: 'hello' };
        (0, _index.notDeepEqual)(a, b);
    });
    it('false', function () {
        var a = { hi: 'hi' };
        var b = { hi: 'hi' };
        mustThrewException(function () {
            (0, _index.notDeepEqual)(a, b);
        });
    });
});
describe('throw', function () {
    it('true', function () {
        (0, _index.throws)(function () {
            throw 'Teste';
        });
    });
});
describe('contains', function () {
    it('true', function () {
        var list = ['a', 'b'];
        (0, _index.contains)(list, 'a');
    });
    it('false', function () {
        var list = ['a', 'b'];
        mustThrewException(function () {
            (0, _index.contains)(list, 'c');
        });
    });
});
describe('containsFind', function () {
    it('true', function () {
        var list = [{ a: 'b' }, { c: 'd' }];
        (0, _index.containsFind)(list, function (i) {
            return i.a === 'b';
        });
    });
    it('false', function () {
        var list = [{ a: 'b' }, { c: 'd' }];
        mustThrewException(function () {
            (0, _index.containsFind)(list, function (i) {
                return i.a === 'c';
            });
        });
    });
});
describe('notContainsFind', function () {
    it('true', function () {
        var list = [{ a: 'b' }, { c: 'd' }];
        (0, _index.notContainsFind)(list, function (i) {
            return i.a === 'c';
        });
    });
    it('false', function () {
        var list = [{ a: 'b' }, { c: 'd' }];
        mustThrewException(function () {
            (0, _index.notContainsFind)(list, function (i) {
                return i.a === 'b';
            });
        });
    });
});
describe('containsNTimes', function () {
    var list = ['a', 'b', 'b', 'c', 'c', 'c'];
    it('0', function () {
        (0, _index.containsNTimes)(list, 'd', 0);
    });
    it('1', function () {
        (0, _index.containsNTimes)(list, 'a', 1);
    });
    it('2', function () {
        (0, _index.containsNTimes)(list, 'b', 2);
    });
    it('3', function () {
        (0, _index.containsNTimes)(list, 'c', 3);
    });
});
describe('notContains', function () {
    it('true', function () {
        var list = ['a', 'b'];
        (0, _index.notContains)(list, 'c');
        (0, _index.notContains)(undefined, 'c');
    });
    it('false', function () {
        var list = ['a', 'b'];
        mustThrewException(function () {
            (0, _index.notContains)(list, 'a');
        });
    });
});
describe('notEmptyString', function () {
    it('not empty', function () {
        (0, _index.notEmptyString)('Hello world!');
    });
    it('empty', function () {
        mustThrewException(function () {
            (0, _index.notEmptyString)('');
        });
    });
    it('null', function () {
        mustThrewException(function () {
            (0, _index.notEmptyString)(null);
        });
    });
    it('obj', function () {
        mustThrewException(function () {
            (0, _index.notEmptyString)({});
        });
    });
    it('number', function () {
        mustThrewException(function () {
            (0, _index.notEmptyString)(123);
        });
    });
});
describe('notEmptyArray', function () {
    it('not empty', function () {
        (0, _index.notEmptyArray)(['', '']);
    });
    it('empty', function () {
        mustThrewException(function () {
            (0, _index.notEmptyArray)([]);
        });
    });
    it('empty and custom error msg', function () {
        var errorMsg = 'error msg';
        mustThrewException(function () {
            (0, _index.notEmptyArray)([], errorMsg);
        }, errorMsg);
    });
    it('null', function () {
        mustThrewException(function () {
            (0, _index.notEmptyArray)(null);
        });
    });
    it('null and custom error msg', function () {
        var errorMsg = 'error msg';
        mustThrewException(function () {
            (0, _index.notEmptyArray)(null, errorMsg);
        }, errorMsg);
    });
    it('undefined', function () {
        mustThrewException(function () {
            (0, _index.notEmptyArray)(undefined);
        });
    });
    it('undefined and custom error msg', function () {
        var errorMsg = 'error msg';
        mustThrewException(function () {
            (0, _index.notEmptyArray)(undefined, errorMsg);
        }, errorMsg);
    });
});
describe('emptyArray', function () {
    it('empty', function () {
        (0, _index.emptyArray)([]);
    });
    it('not empty', function () {
        mustThrewException(function () {
            (0, _index.emptyArray)(['', '']);
        });
    });
    it('null', function () {
        (0, _index.emptyArray)(null);
    });
    it('undefined', function () {
        (0, _index.emptyArray)(undefined);
    });
});
//# sourceMappingURL=index.test.js.map
//# sourceMappingURL=index.test.js.map
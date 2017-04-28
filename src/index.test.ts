import {
    contains,
    containsFind,
    containsNTimes,
    deepEqual,
    emptyArray,
    equal,
    notContains,
    notContainsFind,
    notDeepEqual,
    notEmptyArray,
    notEmptyString,
    notEqual,
    notOk,
    ok,
    throws
} from './index';

let mustThrewException = (exec, errorMsg?: string) => {
    let threw = false;

    try {
        exec();
    } catch (ex) {
        threw = true;
        if (errorMsg && ex !== errorMsg)
            throw 'not threw custom error msg: ' + errorMsg;
    } finally {
        if (!threw)
            throw 'not threw an exception'; // tslint:disable-line:no-unsafe-finally
    }
};

describe('ok', () => {

    it('null', () => {
        mustThrewException(() => {
            ok(null);
        });
    });
    it('undefined', () => {
        mustThrewException(() => {
            ok(undefined);
        });
    });
    it('false', () => {
        mustThrewException(() => {
            ok(false);
        });
    });
    it('true', () => {
        ok(true);
    });
    it('obj', () => {
        ok({ hi: 'hi' });
    });
});

describe('notOk', () => {
    it('null', () => {
        notOk(null);
    });
    it('undefined', () => {
        notOk(undefined);
    });
    it('false', () => {
        notOk(false);
    });
    it('true', () => {
        mustThrewException(() => {
            notOk(true);
        });
    });
    it('obj', () => {
        mustThrewException(() => {
            notOk({ hi: 'hi' });
        });
    });
});

describe('equal', () => {
    it('true', () => {
        let a = { hi: 'hi' };
        let b = a;

        equal(a, b);
    });
    it('false', () => {
        let a = { hi: 'hi' };
        let b = { hello: 'hello' };

        mustThrewException(() => {
            equal(a, b);
        });
    });
});

describe('notEqual', () => {
    it('true', () => {
        let a = { hi: 'hi' };
        let b = a;

        mustThrewException(() => {
            notEqual(a, b);
        });
    });
    it('false', () => {
        let a = { hi: 'hi' };
        let b = { hello: 'hello' };

        notEqual(a, b);
    });
});

describe('deepEqual', () => {
    it('true', () => {
        let a = { hi: 'hi' };
        let b = { hi: 'hi' };

        deepEqual(a, b);
    });

    it('false', () => {
        let a = { hi: 'hi' };
        let b = { hello: 'hello' };

        mustThrewException(() => {
            deepEqual(a, b);
        });
    });
});

describe('notDeepEqual', () => {
    it('true', () => {
        let a = { hi: 'hi' };
        let b = { hello: 'hello' };

        notDeepEqual(a, b);
    });

    it('false', () => {
        let a = { hi: 'hi' };
        let b = { hi: 'hi' };

        mustThrewException(() => {
            notDeepEqual(a, b);
        });
    });
});

describe('throw', () => {
    it('true', () => {
        throws(() => {
            throw 'Teste';
        });
    });
});

describe('contains', () => {
    it('true', () => {
        var list = ['a', 'b'];
        contains(list, 'a');
    });

    it('false', () => {
        var list = ['a', 'b'];
        mustThrewException(() => {
            contains(list, 'c');
        });
    });
});

describe('containsFind', () => {
    it('true', () => {
        var list = [{ a: 'b' }, { c: 'd' }];
        containsFind(list, i => i.a === 'b');
    });

    it('false', () => {
        var list = [{ a: 'b' }, { c: 'd' }];
        mustThrewException(() => {
            containsFind(list, i => i.a === 'c');
        });
    });
});

describe('notContainsFind', () => {
    it('true', () => {
        var list = [{ a: 'b' }, { c: 'd' }];
        notContainsFind(list, i => i.a === 'c');
    });

    it('false', () => {
        var list = [{ a: 'b' }, { c: 'd' }];
        mustThrewException(() => {
            notContainsFind(list, i => i.a === 'b');
        });
    });
});

describe('containsNTimes', () => {
    const list = ['a', 'b', 'b', 'c', 'c', 'c'];

    it('0', () => {
        containsNTimes(list, 'd', 0);
    });

    it('1', () => {
        containsNTimes(list, 'a', 1);
    });

    it('2', () => {
        containsNTimes(list, 'b', 2);
    });

    it('3', () => {
        containsNTimes(list, 'c', 3);
    });
});

describe('notContains', () => {
    it('true', () => {
        var list = ['a', 'b'];
        notContains(list, 'c');
        notContains(undefined, 'c');
    });

    it('false', () => {
        var list = ['a', 'b'];
        mustThrewException(() => {
            notContains(list, 'a');
        });
    });
});

describe('notEmptyString', () => {
    it('not empty', () => {
        notEmptyString('Hello world!');
    });

    it('empty', () => {
        mustThrewException(() => {
            notEmptyString('');
        });
    });

    it('null', () => {
        mustThrewException(() => {
            notEmptyString(null);
        });
    });

    it('obj', () => {
        mustThrewException(() => {
            notEmptyString({});
        });
    });

    it('number', () => {
        mustThrewException(() => {
            notEmptyString(123);
        });
    });
});

describe('notEmptyArray', () => {
    it('not empty', () => {
        notEmptyArray(['', '']);
    });

    it('empty', () => {
        mustThrewException(() => {
            notEmptyArray([]);
        });
    });

    it('empty and custom error msg', () => {
        const errorMsg = 'error msg';
        mustThrewException(() => {
            notEmptyArray([], errorMsg);
        }, errorMsg);
    });

    it('null', () => {
        mustThrewException(() => {
            notEmptyArray(null);
        });
    });

    it('null and custom error msg', () => {
        const errorMsg = 'error msg';
        mustThrewException(() => {
            notEmptyArray(null, errorMsg);
        }, errorMsg);
    });

    it('undefined', () => {
        mustThrewException(() => {
            notEmptyArray(undefined);
        });
    });

    it('undefined and custom error msg', () => {
        const errorMsg = 'error msg';
        mustThrewException(() => {
            notEmptyArray(undefined, errorMsg);
        }, errorMsg);
    });
});

describe('emptyArray', () => {
    it('empty', () => {
        emptyArray([]);
    });

    it('not empty', () => {
        mustThrewException(() => {
            emptyArray(['', '']);
        });
    });

    it('null', () => {
        emptyArray(null);
    });

    it('undefined', () => {
        emptyArray(undefined);
    });
});

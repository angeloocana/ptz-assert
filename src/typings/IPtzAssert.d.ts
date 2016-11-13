interface IPtzAssert{
    ok(value: any, message?: string): void;
    notOk(value: any, message?: string): void;
    equal(actual: any, expected: any, message?: string): void;
    notEqual(actual: any, expected: any, message?: string): void;
    deepEqual(actual: any, expected: any, message?: string): void;
    notDeepEqual(acutal: any, expected: any, message?: string): void;
}
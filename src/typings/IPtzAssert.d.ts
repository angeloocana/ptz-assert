interface IPtzAssert{
    ok(value:any, message?:string);
    
    notOk(value:any, message?:string);

    equal(actual, expected, message?:string);
    
    deepEqual(actual, expected, message?:string);
}
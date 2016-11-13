interface IPtzAssert{
    ok(value:any, message?:string);
    
    notOk(value:any, message?:string);

    equal(actual, expected, message?:string);
    
    deepEqual(actual, expected, message?:string);
}

declare module "ptz-assert" {
    export = IPtzAssert;
}


// // Type definitions for assert and power-assert
// // Project: https://github.com/angeloocana/ptzAssert
// // Project: https://github.com/Jxck/assert
// // Project: https://github.com/twada/power-assert
// // Definitions by: angeloocana <https://github.com/angeloocana>
// // Definitions by: vvakame <https://github.com/vvakame>
// // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// declare function ptzAssert(value:any, message?:string):void;
// declare namespace ptzAssert {
//     export class AssertionError implements Error {
//         name:string;
//         message:string;
//         actual:any;
//         expected:any;
//         operator:string;
//         generatedMessage:boolean;

//         constructor(options?:{message?: string; actual?: any; expected?: any; operator?: string; stackStartFunction?: Function});
//     }

//     export function fail(actual?:any, expected?:any, message?:string, operator?:string):void;

//     export function ok(value:any, message?:string):void;

//     export function notOk(value:any, message?:string):void;

//     export function equal(actual:any, expected:any, message?:string):void;

//     export function notEqual(actual:any, expected:any, message?:string):void;

//     export function deepEqual(actual:any, expected:any, message?:string):void;

//     export function notDeepEqual(acutal:any, expected:any, message?:string):void;

//     export function strictEqual(actual:any, expected:any, message?:string):void;

//     export function notStrictEqual(actual:any, expected:any, message?:string):void;

//     export var throws:{
//         (block:Function, message?:string): void;
//         (block:Function, error:Function, message?:string): void;
//         (block:Function, error:RegExp, message?:string): void;
//         (block:Function, error:(err:any) => boolean, message?:string): void;
//     };

//     export var doesNotThrow:{
//         (block:Function, message?:string): void;
//         (block:Function, error:Function, message?:string): void;
//         (block:Function, error:RegExp, message?:string): void;
//         (block:Function, error:(err:any) => boolean, message?:string): void;
//     };

//     export function ifError(value:any):void;
// }

// declare module "ptz-assert" {
//     export = ptzAssert;
// }

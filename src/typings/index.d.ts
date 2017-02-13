declare module "ptz-assert" {
    namespace PtzAssert {
        export function ok(value: any, message?: string): void;

        export function notOk(value: any, message?: string): void;

        /**
         * Var should be same reference, not duck type
         */
        export function equal(actual: any, expected: any, message?: string): void;

        export function notEqual(actual: any, expected: any, message?: string): void;

        export function deepEqual(actual: any, expected: any, message?: string): void;

        export function notDeepEqual(acutal: any, expected: any, message?: string): void;

        export var throws: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        export function contains(list:any[], item:any):void;
    }

    export = PtzAssert;
}

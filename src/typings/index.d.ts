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
    }

    export = PtzAssert;
}
import { ok, equal, deepEqual, notEqual, notDeepEqual, throws } from "assert";

function notOk(value: any, message?: string) {
    return ok(!value, message);
}

function contains(list: any[], item:any){
    return ok(list.indexOf(item) >= 0);
}

function notContains(list: any[], item:any){
    if(!list)
        return;

    return notOk(list.indexOf(item) >= 0);
}

function notEmptyString(text){
    if(!text) 
        throw 'ERROR_NULL_REQUIRED_STRING';

    if(typeof text != 'string')
        throw 'ERROR_NOT_A_STRING';

    if(!(text.length > 0))
        throw 'ERROR_EMPTY_REQUIRED_STRING';
}

export {
    ok, 
    notOk, 
    equal, 
    deepEqual, 
    notEqual, 
    notDeepEqual, 
    throws, 
    contains, 
    notContains,
    notEmptyString    
}


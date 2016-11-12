import {ok,equal,deepEqual, notEqual, notDeepEqual} from "assert";

export default class PtzAssert{
    static ok = ok;
    
    static notOk(value:any, message:string){
        return ok(!value, message);
    }

    static equal = equal;
    
    static deepEqual = deepEqual;
}

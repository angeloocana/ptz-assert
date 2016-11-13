import PtzAssert from "../PtzAssert";

describe("Assert", () => {
    
    describe("ok", () => {
    
       it("true",()=>{
           PtzAssert.ok(true);
       }) 

       it("false",()=>{
           let threw = false;
           
           try{
               PtzAssert.ok(false);
           }
           catch(ex){
               threw = true;
           }           
           finally{
               if(!threw)
                throw "not threw an exception"
           }
       }) 
    });
});